import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export const LoadingState: React.FC<{ message?: string }> = ({
  message = 'Ma’lumotlar yuklanmoqda...'
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mb-4" />
      <p className="text-sm font-medium text-slate-600 dark:text-slate-400 animate-pulse">
        {message}
      </p>
    </div>
  );
};

export const ErrorState: React.FC<{
  message?: string;
  onRetry?: () => void;
}> = ({
  message = 'Ma’lumotlarni yuklashda xatolik yuz berdi.',
  onRetry
}) => {
  return (
    <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-8 max-w-md mx-auto text-center my-8 shadow-xs">
      <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
        {message}
      </h3>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
        Internet aloqasini tekshiring yoki sahifani qayta yangilang.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Qayta urinish</span>
        </button>
      )}
    </div>
  );
};
