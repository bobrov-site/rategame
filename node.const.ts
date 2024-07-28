import path from 'path';

const sourceDir = path.resolve(__dirname, 'src');
const resolveSource = (p: string) => path.resolve(sourceDir, p);

const isWin = process.platform === 'win32';

const winPaths = {
  srcDir: './src',
  dir: {
    public: './public',
    assets: 'assets',
    middleware: 'app/middleware',
    modules: 'app/modules',
    plugins: 'app/plugins',
    pages: 'pages',
    layouts: 'widgets/layouts',
  },
  components: {
    dirs: ['shared/ui', 'widgets', 'entities', 'features'],
  },
};

const unixPaths = {
  srcDir: sourceDir,
  dir: {
    public: '../public',
    assets: resolveSource('assets'),
    middleware: resolveSource('app/middleware'),
    modules: resolveSource('app/modules'),
    plugins: resolveSource('app/plugins'),
    pages: resolveSource('pages'),
    layouts: resolveSource('widgets/layouts'),
  },
  components: {
    dirs: [resolveSource('shared/ui'), resolveSource('widgets'), resolveSource('entities'), resolveSource('features')],
  },
};

export const paths = isWin ? winPaths : unixPaths;
