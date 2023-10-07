import request, { http } from '@/utils/request';

//File LIST
export const oodFileList = (type, token, deviceData, prefix, scroll, category = 0, date = '', max_keys = '30') => {
  let url = `/list_files`,
    // prefix = "",
    delimiter = '/',
    // max_keys = "50",
    start_after = '',
    continuation_token = scroll || '',
    version_id_marker = '',
    key_marker = '',
    orderby = '',
    tags = '';
  if (category != 0) {
    // imglist
    delimiter = '';
  }
  let data = {
    prefix,
    delimiter,
    max_keys,
    start_after,
    continuation_token,
    version_id_marker,
    key_marker,
    deviceData,
    type,
    token,
    category,
    orderby,
    tags,
    date,
  };

  return request({
    url: url,
    method: 'POST',
    data,
  });
};
export function GetFileListAll(data) {
  return request({
    url: '/file/list_all',
    method: 'post',
    data,
  });
}

export function GetCloudFileListAll(data) {
  return request({
    url: '/cloud/file/list_all',
    method: 'post',
    data,
  });
}
