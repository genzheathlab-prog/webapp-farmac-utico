'use client';

import { useState } from 'react';
import { Upload, FileText, CheckCircle, XCircle, AlertTriangle, Loader2, Download } from 'lucide-react';

interface AnalysisResult {
  principio_ativo: string;
  parametros: {
    pureza?: string;
    ponto_fusao?: string;
    umidade?: string;
    ph?: string;
  };
  lote: string;
  fornecedor: string;
  conclusao: 'APROVADO' | 'REPROVADO' | 'RESSALVA';
  justificativa: string;
  referencia: string;
  data_analise: string;
}

interface VIIModuleProps {
  darkMode: boolean;
}

export default function VIIModule({ darkMode }: VIIModuleProps) {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setAnalyzing(true);
    setError(null);

    try {
      // Simulação de análise (em produção, integrar com Azure Vision + OpenAI)
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Resultado simulado
      const mockResult: AnalysisResult = {
        principio_ativo: 'Ácido Ascórbico',
        parametros: {
          pureza: '99.8%',
          ponto_fusao: '190°C',
          umidade: '0.12%',
          ph: '2.5'
        },
        lote: 'AA-2405',
        fornecedor: 'Sigma Pharma',
        conclusao: 'APROVADO',
        justificativa: 'Todos os parâmetros estão dentro dos limites estabelecidos pela Farmacopeia Brasileira V.',
        referencia: 'Farmacopeia Brasileira V – Monografia: Ácido Ascórbico (item 2.4.5)',
        data_analise: new Date().toLocaleDateString('pt-BR')
      };

      setResult(mockResult);
    } catch (err) {
      setError('Erro ao analisar o certificado. Tente novamente.');
    } finally {
      setAnalyzing(false);
    }
  };

  const handleDownloadReport = () => {
    if (!result) return;

    const reportContent = `
RELATÓRIO DE VALIDAÇÃO DE INSUMO - V.I.I.
Farmassistant.ai
Data: ${result.data_analise}

IDENTIFICAÇÃO
Princípio Ativo: ${result.principio_ativo}
Lote: ${result.lote}
Fornecedor: ${result.fornecedor}

PARÂMETROS ANALISADOS
${Object.entries(result.parametros).map(([key, value]) => `${key.replace('_', ' ').toUpperCase()}: ${value}`).join('\n')}

CONCLUSÃO: ${result.conclusao}

JUSTIFICATIVA:
${result.justificativa}

REFERÊNCIA LEGAL:
${result.referencia}

---
Documento gerado automaticamente pelo sistema V.I.I. (Validação Inteligente de Insumos)
Conforme RDC 67/2007 e Farmacopeia Brasileira V
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `VII_${result.principio_ativo}_${result.lote}_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <div className={`border-2 border-dashed rounded-xl p-8 text-center ${
        darkMode 
          ? 'border-gray-700 bg-gray-800/50' 
          : 'border-gray-300 bg-gray-50'
      }`}>
        <input
          type="file"
          id="ca-upload"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="ca-upload"
          className="cursor-pointer flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {file ? file.name : 'Enviar Certificado de Análise'}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              PDF, JPG ou PNG (máx. 10MB)
            </p>
          </div>
        </label>
      </div>

      {/* Analyze Button */}
      {file && !result && (
        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {analyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Analisando com IA...
            </>
          ) : (
            <>
              <FileText className="w-5 h-5" />
              Analisar Certificado
            </>
          )}
        </button>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-100 border border-red-300 rounded-xl flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      {/* Analysis Result */}
      {result && (
        <div className="space-y-4">
          {/* Status Card */}
          <div className={`p-6 rounded-xl border-2 ${
            result.conclusao === 'APROVADO'
              ? 'bg-green-50 border-green-300'
              : result.conclusao === 'REPROVADO'
              ? 'bg-red-50 border-red-300'
              : 'bg-yellow-50 border-yellow-300'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              {result.conclusao === 'APROVADO' && (
                <CheckCircle className="w-8 h-8 text-green-600" />
              )}
              {result.conclusao === 'REPROVADO' && (
                <XCircle className="w-8 h-8 text-red-600" />
              )}
              {result.conclusao === 'RESSALVA' && (
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              )}
              <div>
                <h3 className={`text-xl font-bold ${
                  result.conclusao === 'APROVADO'
                    ? 'text-green-900'
                    : result.conclusao === 'REPROVADO'
                    ? 'text-red-900'
                    : 'text-yellow-900'
                }`}>
                  {result.conclusao}
                </h3>
                <p className={`text-sm ${
                  result.conclusao === 'APROVADO'
                    ? 'text-green-700'
                    : result.conclusao === 'REPROVADO'
                    ? 'text-red-700'
                    : 'text-yellow-700'
                }`}>
                  Análise concluída em {result.data_analise}
                </p>
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className={`p-6 rounded-xl ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            <h4 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Detalhes da Análise
            </h4>

            <div className="space-y-3">
              <div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Princípio Ativo:
                </span>
                <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {result.principio_ativo}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Lote:
                  </span>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {result.lote}
                  </p>
                </div>
                <div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Fornecedor:
                  </span>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {result.fornecedor}
                  </p>
                </div>
              </div>

              <div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} block mb-2`}>
                  Parâmetros Analisados:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(result.parametros).map(([key, value]) => (
                    <div key={key} className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {key.replace('_', ' ').toUpperCase()}
                      </span>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Justificativa:
                </span>
                <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {result.justificativa}
                </p>
              </div>

              <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
                <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                  Referência Legal:
                </span>
                <p className={`mt-1 text-sm ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  {result.referencia}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleDownloadReport}
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar Relatório
            </button>
            <button
              onClick={() => {
                setFile(null);
                setResult(null);
              }}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                darkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Nova Análise
            </button>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
        <h4 className={`font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-900'}`}>
          💡 Como funciona o V.I.I.?
        </h4>
        <ul className={`text-sm space-y-1 ${darkMode ? 'text-blue-300' : 'text-blue-800'}`}>
          <li>• Envie o Certificado de Análise (CA) em PDF ou imagem</li>
          <li>• A IA extrai automaticamente os dados técnicos</li>
          <li>• Compara com os padrões da Farmacopeia Brasileira V</li>
          <li>• Gera parecer técnico conforme RDC 67/2007</li>
          <li>• Registra no histórico para auditoria</li>
        </ul>
      </div>
    </div>
  );
}
