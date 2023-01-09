import * as fs from 'fs'

// apache server のアクセスログからデータを読み込み
// (本のサンプルからディレクトリをに変更している)
fs.readFile(
    './src/ch8/8_2_log.txt',
    { encoding: 'utf8'},
    (error, data) => {
        if (error) {
            console.error('error reading', error)
            return
        }
        console.info('success reading', data)
    }
)

// 同時に、データ書き込み
fs.appendFile(
    './src/ch8/8_2_log.txt',
    '\nNew Access log entry',
    error => {
        if (error) {
            console.error('error writing', error)
        }
    }
)