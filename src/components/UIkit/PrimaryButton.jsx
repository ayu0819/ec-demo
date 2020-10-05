// (1)マテリアルUIのテキスト入力を使う・カスタマイズして再利用する
import React from 'react';
// (2)material UIから Button をimport
import Button from '@material-ui/core/Button'
// (3)materialUIでリジナルcssを設定する makeStyles をimport
import {makeStyles} from "@material-ui/styles"

// (6) impoertした makeStyles を設定する
const useStyles = makeStyles({
"button": {
  backgroundColor: "#4dd0e1",
  color: "#000",
  fontSise: 16,
  height: 48,
  merginBottom: 16,
  width: 256
}
})

// (4)props(毎回毎回表示を切り替える行為) でファンクショナルコンポネートを作成
const PrimaryButton = (props) => {
  const classes = useStyles();

  // (5)Buttonコンポネート を返す
  return(
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {/* ラベル により 文字の表示ができる */}
    {props.label}
  </Button>
  )
}

export default PrimaryButton