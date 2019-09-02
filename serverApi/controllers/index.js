/*
 * @Author: 刘攀
 * @Date: 2019-09-02 11:00:33
 * @LastEditors: 刘攀
 * @LastEditTime: 2019-09-02 11:05:34
 * @Description: file content
 */
const _ = require('lodash')
const fs = require('fs-extra')

const path = require('path')

/**
 * 映射 d 文件夹下的文件为模块
 */
const mapDir = d => {
    const tree = {}

    // 获得当前文件夹下的所有的文件夹和文件
    const [dirs, files] = _(fs.readdirSync(d)).partition(p => fs.statSync(path.join(d, p)).isDirectory())

    // 映射文件夹
    dirs.forEach(dir => {
        tree[dir] = mapDir(path.join(d, dir))
    })

    // 映射文件
    files.forEach(file => {
        if (path.extname(file) === '.js') {
            tree[path.basename(file, '.js')] = require(path.join(d, file))
        }
    })

    return tree
}

// 默认导出当前文件夹下的映射
module.exports = mapDir(path.join(__dirname))
