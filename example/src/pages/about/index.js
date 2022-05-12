import { previewShow } from '@/components/preview';
import BigNumber from 'bignumber.js'
import { useState, useReducer, useRef, useEffect } from "react";
import MarketItem from '../../components/marketItem';
import { Foo, RankList, CountdownButton } from 'component-lib-bruce-test';
function About() {

  const [count, setCount] = useState(0)
  const [count2, dispatch] = useReducer(reducerAlert, {count2: 0})
  const latestCount = useRef(count)
  const [userInfo, setUserInfo] = useState({name: 'allen'})
  const [loading, setLoading] = useState(false);

  const getCode = async () => {
    setLoading(true);
    try {
      return await new Promise((resolve) =>
        setTimeout(() => {
          resolve(123);
        }, 1000),
      );
    } catch (err) {
      throw new Error('failed');
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    console.log('handleClick')
    previewShow()
  }

  const data = Array.from(new Array(10)).map((_, idx) => ({
    label: `选项${idx + 1}`,
    value: 10 - idx,
  }));

  function reducerAlert(state, action) {
    let newState = {}
    switch (action.type) {
      case 'add':
        newState = {
          count2: state.count2 + 1
        }
        break
      default:
        break
    }

    return { ...state, ...newState }
  }

  function handleAlertClick() {
    setTimeout(() => {
      // alert('You clicked on: ' + count);

      // 模拟异步回调中读取最新的state
      alert('You clicked on: ' + latestCount.current);
    }, 3000);

    // alert('You clicked on: ' + count);

  }

  useEffect(() => {
    console.log(userInfo, 'useInfo')
  }, [userInfo.name])

  useEffect(() => {
    // 在这里修改ref，拿到的是最新的count
    latestCount.current = count
  }, [count])

  const handleInfo = () => {
    console.log('click')
    userInfo.name = 'bruce'
    setUserInfo({...userInfo})
  }

  const handleClickMe = () => {
    // 在这里修改ref，拿到的是最新count的上一次的值
    // latestCount.current = count
    setCount(count + 1)
  }
  const handleClickTwo = () => {
    console.log(count, 'count one')
    setCount(2)
    dispatch({type: 'add'})
    console.log(count, 'count two')
  }
  
  const x = new BigNumber(0.1)
  const y = x.plus(0.2)
  // console.log(y, 'yyyyy')
  // console.log(process.he, 'process.env.NODE_ENV----')
  // console.log(process.env.TYPE, '环境变量type参数打印')
  // console.log(process.env.ENV, 'ENV---')
  
  return (
    <div>
      <div>{count2.count2}</div>
      <h1>about</h1>
      <button onClick={handleClick}>showModal</button>
      <div>{`直接使用0.2 + 0.1: ${0.2 + 0.1}`}</div>
      <div>{`使用BigNumber进行0.2 + 0.1: ${y.toNumber()}`}</div>
      <button onClick={handleClickTwo}>click</button>
      <p>You clicked {count} times</p>
      <button onClick={handleClickMe}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
      <button onClick={handleInfo}>
        update useInfo
      </button>
      <MarketItem userInfo={userInfo}></MarketItem>
      <Foo title="First Demo" />
      <RankList data={data}></RankList>
      <CountdownButton
        loading={loading}
        onClick={async (completeCallback) => {
          const code = await getCode();
          console.log(`验证码：${code}`);
          // completeCallback();
        }}
    >
      获取验证码
    </CountdownButton>
    </div>
  );
}
export default About