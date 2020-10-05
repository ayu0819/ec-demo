// マテリアルUIのテキスト入力を使う・カスタマイズして再利用する
import React from 'react';
import TextField from '@material-ui/core/TextField'

//ファンクショナルコンポネート で作成
const TextInput = (props) => {
  return (
    // materialUI の TextField を返して、プロパティを設定する
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin={"dense"}
      // 複数行の入力許可
      multiline={props.multiline}
      // 入力が必須項目かどうか
      required={props.required}
      // 〜行を設定する
      rows={props.rows}
      value={props.value}
      type={props.type}
      // textinputの親コンポネートに入力した値の変化のための関数
      onChange={props.onChange}
    />
  )
}

export default TextInput