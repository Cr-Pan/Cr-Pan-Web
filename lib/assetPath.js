export function withBasePath(src, basePath = '') {
  if (!src) {
    return ''
  }

  if (/^(https?:)?\/\//.test(src)) {
    return src
  }

  const normalizedBasePath = basePath || (process.env.NODE_ENV === 'production' ? '/Cr-Pan-Web' : '')
  const normalizedPath = src.startsWith('/') ? src : `/${src}`
  return `${normalizedBasePath}${normalizedPath}`
}
