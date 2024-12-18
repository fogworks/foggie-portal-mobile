import { HmacSHA1, enc } from 'crypto-js';
import { Buffer } from 'buffer';
import getExtensionByMimeType from './mimeTransfer.js';
import { toRefs } from 'vue';

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
  // url = encodeURI(url);
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
  var fileName = encodeURIComponent(filePath.substring(filePath.lastIndexOf('/') + 1));
  console.log('directoryPath:', directoryPath);
  console.log('fileName:', fileName);
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
          console.error('Error getting file:', JSON.stringify(error));
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
    if (device.platform === 'Android' && parseFloat(device.version) >= 13) {
      downloadFileHH(url, name, headers);
    } else if (device.platform === 'Android' && parseFloat(device.version) >= 11 && parseFloat(device.version) < 13) {
      // Android 11 及以上版本的处理逻辑
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
        console.error('检测无权限');
        requestManageExternalStoragePermission();
      } else {
        console.error('检测有权限');
        downloadFileHH(url, name, headers);
      }
    },
    function (error) {
      console.error('检测失败');
      console.error('Permission check error: ' + error);
      requestManageExternalStoragePermission();
    },
  );
}
function syncPhotos(options) {
  const { syncImgList, bucketName, accessKeyId, secretAccessKey, orderInfo, prefix } = toRefs(options);
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
            syncImgList.value.push(entry.toURL());
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
  var permissions = cordova.plugins.permissions;
  let permissionsList;
  if (parseFloat(device.version) >= 13) {
    permissionsList = [permissions.READ_MEDIA_IMAGES];
  } else {
    permissionsList = [permissions.READ_EXTERNAL_STORAGE];
  }
  function requestPermissions(permissionsList, callback) {
    if (permissionsList.length === 0) {
      return callback(true); // 所有权限都已处理
    }

    var permission = permissionsList.pop();

    permissions.checkPermission(
      permission,
      function (status) {
        if (!status.hasPermission) {
          permissions.requestPermission(
            permission,
            function (status) {
              if (status.hasPermission) {
                requestPermissions(permissionsList, callback); // 继续检查下一个权限
              } else {
                callback(false); // 权限被拒绝
              }
            },
            function () {
              callback(false); // 请求权限时出错
            },
          );
        } else {
          requestPermissions(permissionsList, callback); // 权限已授予，继续检查下一个
        }
      },
      function () {
        callback(false); // 检查权限时出错
      },
    );
  }
  requestPermissions(permissionsList.slice(), function (allGranted) {
    if (allGranted) {
      console.log('所有必要的权限已授予');
      window.resolveLocalFileSystemURL(
        cordova.file.externalRootDirectory,
        function (rootDirEntry) {
          rootDirEntry.getDirectory(
            'DCIM/Camera',
            { create: false },
            function (dirEntry) {
              scanDirectory(dirEntry); // 扫描 DCIM 目录
              async function processImages() {
                if (syncImgList.value) {
                  for (let i = 0; i < syncImgList.value.length; i++) {
                    await getFileDetails(syncImgList.value[i], options);
                  }
                }
              }
              processImages();
            },
            errorHandler,
          );
        },
        errorHandler,
      );
    } else {
      console.log('至少一个权限被拒绝或请求失败');
    }
  });
}
const getType = (fileName) => {
  fileName = fileName.toLowerCase();
  if (
    fileName.endsWith('.jpeg') ||
    fileName.endsWith('.jpg') ||
    fileName.endsWith('.png') ||
    fileName.endsWith('.svg') ||
    fileName.endsWith('.gif')
  ) {
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
  } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls') || fileName.endsWith('.csv')) {
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
  function errorHandler(error) {
    console.log('Error accessing file: ' + JSON.stringify(error));
    alert('Failed to get file information: ' + error.code);
  }

  function errorHandler2(error) {
    console.log('Error accessing file on second attempt: ' + JSON.stringify(error));
    alert('Failed to get file information on second attempt: ' + error.code);
  }
  function errorHandler3(error) {
    console.log('Error3 accessing file on second attempt: ' + JSON.stringify(error));
    alert('Failed to get file information on second attempt: ' + error.code);
  }
  let fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
  return new Promise((resolve, reject) => {
    if (parseFloat(device.version) >= 13) {
      window.resolveLocalFileSystemURL(
        fileURI,
        function (fileEntry) {
          fileEntry.file(async function (file) {
            console.log('File: ' + JSON.stringify(file));
            console.log('File Name: ' + file.name);
            console.log('File Size: ' + file.size);
            console.log('File Type: ' + file.type);
            console.log('Last Modified: ' + file.lastModifiedDate);
            console.log('fileEntry.toURL(): ' + fileEntry.toURL());
            console.log('fileURI: ' + fileURI);
            file.name = decodeURIComponent(fileName + getExtensionByMimeType(file.type));
            file.localURL = decodeURIComponent(file.localURL);
            await uploadFile(fileURI, file, paramData);
            resolve(true);
            // 如果需要上传文件，可以在这里调用上传函数
          }, errorHandler2);
        },
        errorHandler,
      );
    } else {
      if (fileName.split('.').length > 1 && fileName.split('.')[fileName.split('.').length - 1]) {
        window.resolveLocalFileSystemURL(
          fileURI,
          function (fileEntry) {
            fileEntry.file(async function (file) {
              console.log('File: ' + JSON.stringify(file));
              console.log('File Name: ' + file.name);
              console.log('File Size: ' + file.size);
              console.log('File Type: ' + file.type);
              console.log('Last Modified: ' + file.lastModifiedDate);
              console.log('fileEntry.toURL(): ' + fileEntry.toURL());
              console.log('fileURI: ' + fileURI);
              file.name = decodeURIComponent(fileName);
              file.localURL = decodeURIComponent(file.localURL);
              await uploadFile(fileURI, file, paramData);
              resolve(true);

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
                fileEntry.file(async function (file) {
                  console.log('File: ' + JSON.stringify(file));
                  console.log('File Name: ' + file.name);
                  console.log('File Size: ' + file.size);
                  console.log('File Type: ' + file.type);
                  console.log('Last Modified: ' + file.lastModifiedDate);
                  console.log('fileEntry.toURL(): ' + fileEntry.toURL());
                  console.log('nativePath: ' + nativePath);
                  console.log('fileURI: ' + fileURI);
                  await uploadFile(nativePath, file, paramData);
                  resolve(true);

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
  });
}
function chooseFile(paramData) {
  var permissions = cordova.plugins.permissions;
  let permissionsList;
  if (parseFloat(device.version) >= 13) {
    permissionsList = [permissions.READ_MEDIA_IMAGES, permissions.READ_MEDIA_AUDIO, permissions.READ_MEDIA_VIDEO];
  } else {
    permissionsList = [permissions.READ_EXTERNAL_STORAGE];
  }

  function requestPermissions(permissionsList, callback) {
    if (permissionsList.length === 0) {
      return callback(true); // 所有权限都已处理
    }

    var permission = permissionsList.pop();

    permissions.checkPermission(
      permission,
      function (status) {
        if (!status.hasPermission) {
          permissions.requestPermission(
            permission,
            function (status) {
              if (status.hasPermission) {
                requestPermissions(permissionsList, callback); // 继续检查下一个权限
              } else {
                callback(false); // 权限被拒绝
              }
            },
            function () {
              callback(false); // 请求权限时出错
            },
          );
        } else {
          requestPermissions(permissionsList, callback); // 权限已授予，继续检查下一个
        }
      },
      function () {
        callback(false); // 检查权限时出错
      },
    );
  }

  function openFileChooser() {
    fileChooser.open(
      { mine: '*/*' },
      function (uri) {
        console.log(uri); // 处理所选文件的 URI
        getFileDetails(uri, paramData);
      },
      function (e) {
        console.log(e);
      },
    );
  }

  requestPermissions(permissionsList.slice(), function (allGranted) {
    if (allGranted) {
      console.log('所有必要的权限已授予');
      openFileChooser();
    } else {
      console.log('至少一个权限被拒绝或请求失败');
    }
  });
}
function uploadFile(nativePath, file, paramData) {
  const { serviceUrl, bucketName, prefixStr, secretAccessKey, accessKeyId } = paramData;
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
      paramData.onProgress &&
        paramData.onProgress({
          event: { loaded: progressEvent.loaded, total: progressEvent.total },
          option: { sourceFile: { name: file.name } },
          percentage,
        });
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
  return new Promise((resolve, reject) => {
    fileTransfer.upload(
      nativePath,
      encodeURI(serviceUrl),
      function (result) {
        paramData.uploadSuccess &&
          paramData.uploadSuccess({ responseText: result.response, option: { sourceFile: { size: file.size } }, fileItem: file });
        resolve(true);

        console.log('Success: ' + result.response);
      },
      function (error) {
        paramData.onFailure && paramData.onFailure({ responseText: error.code, option: {}, fileItem: file });
        console.error('Error: ' + error.code);
        reject(false);
      },
      options,
    );
  });
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
