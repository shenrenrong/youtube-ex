import React from 'react';
import './Searchbar.css';
import { useRef } from 'react';

function Searchbar(props){
  const inputRef=useRef();
  /* search버튼 클릭시 호출될 함수 */
  /* enter 클릭시 호출공통 함수 */
  const searchfnc = ()=>{
    const value = inputRef.current.value; //input의 value값을 가져온다.
    props.searchResult(value);
  }
  const inputclick = ()=>{
    /* console.log('click'); */
    searchfnc();
  }
  /* 인풋박스에 enter시 호출될 함수 */
  const inputEnter = (e)=>{
    if(e.key === 'Enter'){
      searchfnc();
      console.log('enter');
    }
  }

  return(
    <div className="searchArea">
      <div className="logoarea">
        <h1><img src='/images/logo.png' alt="youtube" className="logoimg" /></h1>
      </div>{/* 왼쪽 */}
      <div className="searchInputarea">
        <input
          type="search"
          placeholder="검색" className="searchInput"
          onKeyPress={inputEnter}
          ref={inputRef} />
        <button className="searchbtn" onClick={inputclick}>
          <img src="/images/searchicon.png" alt="search"/>
        </button>
      </div>{/* 가운데 */}
      <div className="topMenuarea">
        <button className="gridmenubtn">
          <img src="/images/gridmenuicon.png" alt="topmenu"/>
        </button>
      </div>{/* 오른쪽 */}
    </div>
  )
}

export default Searchbar;