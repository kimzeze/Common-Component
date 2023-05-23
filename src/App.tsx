import Button from './components/Button/Button'
import Checkbox from './components/Checkbox/Checkbox'

function App() {
  return (
    <>
      <Button option={1} label={'가입하기'} width={310} onClick={() => null} />
      <br></br>
      <Checkbox
        option={1}
        id={'allAgree'}
        label={'약관 전체동의'}
        onClick={() => null}
      />
      <br></br>
      <Checkbox
        option={2}
        id={'useAgree'}
        label={'이용약관 동의 (필수)'}
        onClick={() => null}
      />
    </>
  )
}

export default App
