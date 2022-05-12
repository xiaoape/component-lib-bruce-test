/*
 * @Author: bruceliu bruceliu@nswap.com
 * @Date: 2022-05-05 19:19:46
 * @LastEditors: bruceliu bruceliu@nswap.com
 * @LastEditTime: 2022-05-05 19:29:07
 * @FilePath: /react-business/src/utils/usePrevious.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
    useEffect,
    useRef,
} from 'react'
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

export default usePrevious;
  