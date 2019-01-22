var {
  request
} = require("base.js");

var API_NAME = {
  LIST: '/list',
  ATTENTION: '/attention',
  VIDEO: '/video',
  FLASH: '/flash',
  COURSE: '/course',
  FIND: '/find',
  FRIEND: '/friend'
}

function list(requestObject) {
  return request('GET', API_NAME.LIST, requestObject)
}

function attention(requestObject) {
  return request('GET', API_NAME.ATTENTION, requestObject)
}

function video(requestObject) {
  return request('GET', API_NAME.VIDEO, requestObject)
}

function flash(requestObject) {
  return request('GET', API_NAME.FLASH, requestObject)
}

function course(requestObject) {
  return request('GET', API_NAME.COURSE, requestObject)
}

function find(requestObject) {
  return request('GET', API_NAME.FIND, requestObject)
}

function friend(requestObject) {
  return request('GET', API_NAME.FRIEND, requestObject)
}

module.exports = {
  list: list,
  attention: attention,
  video: video,
  flash: flash,
  course: course,
  find: find,
  friend: friend,
}