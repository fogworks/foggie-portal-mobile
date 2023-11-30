import { HmacSHA1, enc } from 'crypto-js';
import { Buffer } from 'buffer';

function appGetLocation(result) {
  cordovaDevice();
  function cordovaDevice() {
    console.log(
      'Cordova version: ' +
        device.cordova +
        '\n' +
        'Device model: ' +
        device.model +
        '\n' +
        'Device platform: ' +
        device.platform +
        '\n' +
        'Device UUID: ' +
        device.uuid +
        '\n' +
        'Device version: ' +
        device.version,
    );
    return {
      'Device model: ': device.model,
      'Device version: ': device.version,
    };
  }
}
// 下载文件 txt,doc,jpg
function downloadFileHH(URL, NAME, headers) {
  //   // 下载路径
  let url = URL;
  url = encodeURI(url);
  let filename = NAME; // 文件名
  fetch(url, { method: 'GET', headers })
    .then((response) => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then((blob) => {
      // 使用 Cordova 文件系统 API 保存文件
      var targetPath = cordova.file.externalApplicationStorageDirectory || cordova.file.dataDirectory || cordova.file.externalRootDirectory;
      targetPath += filename;

      saveBlobToFile(blob, targetPath);
    })
    .catch((error) => {
      console.error('Download Error:', error);
    });
}
function saveBlobToFile(blob, filePath) {
  // 获取文件所在目录和文件名
  var directoryPath = filePath.substring(0, filePath.lastIndexOf('/') + 1);
  var fileName = filePath.substring(filePath.lastIndexOf('/') + 1);

  window.resolveLocalFileSystemURL(
    directoryPath,
    function (directoryEntry) {
      directoryEntry.getFile(
        fileName,
        { create: true, exclusive: false },
        function (fileEntry) {
          fileEntry.createWriter(
            function (fileWriter) {
              fileWriter.write(blob);
              alert('Download Success');
            },
            function (error) {
              console.error('File Writing Error:', error);
            },
          );
        },
        function (error) {
          console.error('Error getting file:', error);
        },
      );
    },
    function (error) {
      console.error('File System Error:', error);
    },
  );
}
function redirectToAppSettings() {
  alert('Please turn on storage permissions for all files in the app');
  cordova.plugins.diagnostic.switchToSettings(
    function () {
      console.log('Redirected to storage management settings');
    },
    function (error) {
      console.error('The following error occurred: ' + error);
    },
  );
  // alert('If you are not redirected to the settings page, go manually to set the storage permissions for all files that open the app');
}
// 检查权限
function checkedPermiss(url, name, headers) {
  var permissions = cordova.plugins.permissions;

  function requestManageExternalStoragePermission() {
    // Android 11 及以上版本的处理逻辑
    if (device.platform === 'Android' && parseFloat(device.version) >= 11) {
      cordova.plugins.permissions.requestPermission(
        permissions.MANAGE_EXTERNAL_STORAGE,
        function (status) {
          if (status.hasPermission) {
            downloadFileHH(url, name, headers);
          } else {
            redirectToAppSettings();
          }
        },
        function (error) {
          redirectToAppSettings();
        },
      );
    } else {
      // Android 10 及以下版本的处理逻辑
      var errorCallback = function () {
        alert('No storage permissions, please open storage permissions and try again');
      };

      permissions.requestPermission(
        permissions.WRITE_EXTERNAL_STORAGE,
        function (status) {
          if (status.hasPermission) {
            downloadFileHH(url, name, headers);
          } else {
            errorCallback();
          }
        },
        function (error) {
          console.error('Failed to request permission: ' + error);
        },
      );
    }
  }

  permissions.checkPermission(
    permissions.WRITE_EXTERNAL_STORAGE,
    function (status) {
      if (!status.hasPermission) {
        requestManageExternalStoragePermission();
      } else {
        downloadFileHH(url, name, headers);
      }
    },
    function (error) {
      console.error('Permission check error: ' + error);
      requestManageExternalStoragePermission();
    },
  );
}
function syncPhotos() {
  function errorHandler() {
    alert('fail');
  }
  function scanDirectory(entry) {
    var directoryReader = entry.createReader();
    directoryReader.readEntries(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isFile) {
          // 处理文件
          var fileName = entry.name.toLowerCase();
          if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')) {
            // 处理图片文件
            console.log('Image found: ' + entry.toURL());
          }
        } else if (entry.isDirectory) {
          // 递归扫描子目录
          scanDirectory(entry);
        }
      });
    }, errorHandler);
  }
  window.resolveLocalFileSystemURL(
    cordova.file.externalRootDirectory,
    function (rootDirEntry) {
      rootDirEntry.getDirectory(
        'DCIM',
        { create: false },
        function (dirEntry) {
          scanDirectory(dirEntry); // 扫描 DCIM 目录
        },
        errorHandler,
      );
    },
    errorHandler,
  );
}
const getType = (fileName) => {
  if (fileName.endsWith('.jpeg') || fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.endsWith('.svg')) {
    return 1;
  } else if (fileName.endsWith('.mp4') || fileName.endsWith('.avi') || fileName.endsWith('.mp4')) {
    return 2;
  } else if (fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
    return 4;
  } else if (fileName.endsWith('.zip') || fileName.endsWith('.rar') || fileName.endsWith('.gz') || fileName.endsWith('.tar')) {
    return 5;
  } else if (fileName.endsWith('.cmd')) {
    return 5;
  } else if (fileName.endsWith('.css')) {
    return 5;
  } else if (fileName.endsWith('.mp3')) {
    return 3;
  } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
    return 4;
  } else if (fileName.endsWith('.pdf')) {
    return 4;
  } else if (fileName.endsWith('.ppt') || fileName.endsWith('.pptx')) {
    return 4;
  } else if (fileName.endsWith('.text') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
    return 4;
  } else if (fileName.endsWith('.html')) {
    return 5;
  } else if (fileName.endsWith('/')) {
    return 5;
  } else {
    return 5;
  }
};
function getFileDetails(fileURI, paramData) {
  function errorHandler() {
    alert('Failed to get file information');
  }
  let fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
  if (fileName.split('.')[fileName.split('.').length - 1]) {
    window.resolveLocalFileSystemURL(
      fileURI,
      function (fileEntry) {
        fileEntry.file(function (file) {
          console.log('File: ' + JSON.stringify(file));
          console.log('File Name: ' + file.name);
          console.log('File Size: ' + file.size);
          console.log('File Type: ' + file.type);
          console.log('Last Modified: ' + file.lastModifiedDate);
          console.log('fileEntry.toURL(): ' + fileEntry.toURL());
          console.log('fileURI: ' + fileURI);
          file.name = decodeURIComponent(fileName);
          file.localURL = decodeURIComponent(file.localURL);
          uploadFile(fileURI, file, paramData);

          // 如果需要上传文件，可以在这里调用上传函数
        }, errorHandler);
      },
      errorHandler,
    );
    // 现在可以使用 cordova-plugin-file 的 API 来处理这个路径
  } else {
    // 无后缀命
    window.FilePath.resolveNativePath(
      fileURI,
      function (nativePath) {
        console.log('Native path: ' + nativePath);
        window.resolveLocalFileSystemURL(
          nativePath,
          function (fileEntry) {
            fileEntry.file(function (file) {
              console.log('File: ' + JSON.stringify(file));
              console.log('File Name: ' + file.name);
              console.log('File Size: ' + file.size);
              console.log('File Type: ' + file.type);
              console.log('Last Modified: ' + file.lastModifiedDate);
              console.log('fileEntry.toURL(): ' + fileEntry.toURL());
              console.log('nativePath: ' + nativePath);
              console.log('fileURI: ' + fileURI);
              uploadFile(nativePath, file, paramData);

              // 如果需要上传文件，可以在这里调用上传函数
            }, errorHandler);
          },
          errorHandler,
        );
        // 现在可以使用 cordova-plugin-file 的 API 来处理这个路径
      },
      errorHandler,
    );
  }
}
function chooseFile(paramData) {
  var permissions = cordova.plugins.permissions;
  var permission = permissions.READ_EXTERNAL_STORAGE;

  permissions.checkPermission(
    permission,
    function (status) {
      if (!status.hasPermission) {
        permissions.requestPermission(
          permission,
          function (status) {
            if (status.hasPermission) {
              // 权限被授予，继续文件读取操作
              fileChooser.open(
                function (uri) {
                  // uri 是所选文件的 URI
                  console.log(uri);
                  // 接下来可以使用 fileTransfer 上传文件
                  getFileDetails(uri, paramData);
                },
                function (e) {
                  console.log(e);
                },
              );
            }
          },
          function () {
            // 权限请求被拒绝
          },
        );
      } else {
        fileChooser.open(
          function (uri) {
            // uri 是所选文件的 URI
            console.log(uri);
            // 接下来可以使用 fileTransfer 上传文件
            getFileDetails(uri, paramData);
          },
          function (e) {
            console.log(e);
          },
        );
      }
    },
    function () {
      console.log('error,checkPermission');

      // 检查权限时出错
    },
  );
}
function uploadFile(nativePath, file, paramData) {
  const { serviceUrl, bucketName, prefixStr, secretAccessKey, accessKeyId } = paramData;
  console.log(serviceUrl, 'serviceUrl');
  console.log(bucketName, 'bucketName');
  console.log(prefixStr, 'prefixStr');
  console.log(secretAccessKey, 'secretAccessKey');
  console.log(accessKeyId, 'accessKeyId');
  var fileTransfer = new FileTransfer();
  var options = new FileUploadOptions();
  options.fileKey = 'file';
  // options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
  options.fileName = file.name;
  options.mimeType = 'multipart/form-data';
  options.chunkedMode = false;
  options.headers = {
    'x-amz-meta-content-length': file.size + '',
    'x-amz-meta-content-type': file.type,
    // 更多的头部可以根据需要添加
  };
  fileTransfer.onprogress = function (progressEvent) {
    if (progressEvent.lengthComputable) {
      var percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      paramData.onProgress({ event: { loaded: progressEvent.loaded, total: progressEvent.total }, options: {}, percentage });
      // 在这里更新进度条或其他 UI 元素
    }
  };

  const policy = {
    expiration: new Date(Date.now() + 3600 * 1000),
    conditions: [{ bucket: bucketName }, { acl: 'public-read' }, ['starts-with', file, prefixStr], ['starts-with', '$Content-Type', '']],
  };
  const policyBase64 = Buffer.from(JSON.stringify(policy)).toString('base64');

  let hmac = HmacSHA1(policyBase64, secretAccessKey ?? '');
  const signature = enc.Base64.stringify(hmac);
  // 添加 FormData 参数
  console.log(options.fileName, 'options.fileName');
  options.params = {
    Key: encodeURIComponent(prefixStr + options.fileName),
    Policy: policyBase64,
    Signature: signature,
    Awsaccesskeyid: accessKeyId,
    category: getType(options.fileName),
    // 这里可以添加更多的表单字段
  };
  paramData.onStart({ options: '' });
  fileTransfer.upload(
    nativePath,
    encodeURI(serviceUrl),
    function (result) {
      paramData.uploadSuccess({ responseText: result.response, option: { sourceFile: { size: file.size } }, fileItem: file });

      console.log('Success: ' + result.response);
    },
    function (error) {
      paramData.onFailure({ responseText: error.code, option: {}, fileItem: file });
      console.error('Error: ' + error.code);
    },
    options,
  );
}

export default {
  cordovaGetLocation: function (res) {
    return appGetLocation(res);
  },
  downloadFileHH: function (url, name, headers) {
    return checkedPermiss(url, name, headers);
  },
  syncPhotos,
  chooseFile,
};
