/*
 * @Author: bruceliu bruceliu@nswap.com
 * @Date: 2022-04-21 19:49:13
 * @LastEditors: bruceliu bruceliu@nswap.com
 * @LastEditTime: 2022-05-05 19:31:43
 * @FilePath: /react-business/src/pages/home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import useDebounce from "../../utils/useDebounce";
import useThrottle from "../../utils/useThrottle";
import usePrevious from "../../utils/usePrevious";
function Home() {
  const [count, setCount] = useState(0)
  const handleClickOne = useDebounce(function() {
    console.log('点击一')
  }, 1000, [])
  const handleClickTwo = useCallback(() => {
    console.log('点击二')
  }, [])
  const handleClickThree = useThrottle(() => {
    console.log('点击三')
  }, 1000, [])
  const handleClickFour = () => {
    setCount(2)
  }
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });
  const prevCount = prevCountRef.current;

  const calculation = count + 100;

  const prevCalculation = usePrevious(calculation);


  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
      <button onClick={handleClickOne}>clickOne</button>
      <button onClick={handleClickTwo}>clickTwo</button>
      <button onClick={handleClickThree}>clickThree</button>
      <button onClick={handleClickFour}>clickFour</button>
    <div> {`preCount:${prevCalculation}, count: ${count}, pppCount: ${prevCount}`}</div>
    </div>
  );
}
export default Home