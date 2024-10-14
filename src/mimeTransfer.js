export default function getExtensionByMimeType(mimeType) {
  const mimeTypes = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
    'application/vnd.ms-powerpoint': '.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
    'application/xml': '.xml',
    'application/json': '.json',
    'application/rtf': '.rtf',
    'application/zip': '.zip',
    'application/x-7z-compressed': '.7z',
    'application/x-rar-compressed': '.rar',
    'application/x-tar': '.tar',
    'application/x-bzip': '.bz',
    'application/x-bzip2': '.bz2',
    'application/x-gzip': '.gz',
    'application/java-archive': '.jar',
    'application/x-shockwave-flash': '.swf',
    'application/ld+json': '.jsonld',
    'application/epub+zip': '.epub',
    'image/bmp': '.bmp',
    'image/gif': '.gif',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/svg+xml': '.svg',
    'image/tiff': '.tiff',
    'image/webp': '.webp',
    'image/x-icon': '.ico',
    'audio/aac': '.aac',
    'audio/midi': '.midi',
    'audio/mpeg': '.mp3',
    'audio/ogg': '.ogg',
    'audio/wav': '.wav',
    'audio/webm': '.weba',
    'audio/x-m4a': '.m4a',
    'audio/x-ms-wma': '.wma',
    'video/3gpp': '.3gp',
    'video/mp4': '.mp4',
    'video/mpeg': '.mpeg',
    'video/ogg': '.ogv',
    'video/quicktime': '.mov',
    'video/webm': '.webm',
    'video/x-flv': '.flv',
    'video/x-m4v': '.m4v',
    'video/x-ms-wmv': '.wmv',
    'video/x-msvideo': '.avi',
    'text/css': '.css',
    'text/csv': '.csv',
    'text/html': '.html',
    'text/javascript': '.js',
    'text/plain': '.txt',
    'text/xml': '.xml',
    // 添加更多的 MIME 类型和对应的文件后缀
  };

  return mimeTypes[mimeType] || '';
}
