// Pre-compiled Tailwind config — mirrors the inline config the pages used with the CDN runtime.
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: { jakarta: ['"Plus Jakarta Sans"', 'sans-serif'] },
      colors: {
        base: { 950:'#020617', 900:'#0B1120', 800:'#111827', 700:'#1E293B', 600:'#334155' },
        navy: { 900:'#0C2340', 800:'#123456', 700:'#1A4A7A', 600:'#2563A8', 500:'#3B82C4', 400:'#60A5E8' },
        amber: { 900:'#78350F', 800:'#92400E', 700:'#B45309', 600:'#D97706', 500:'#F59E0B', 400:'#FBBF24', 300:'#FCD34D' },
        slate: { 100:'#F1F5F9', 200:'#E2E8F0', 300:'#CBD5E1', 400:'#94A3B8', 500:'#64748B', 600:'#475569', 700:'#334155' }
      }
    }
  }
};