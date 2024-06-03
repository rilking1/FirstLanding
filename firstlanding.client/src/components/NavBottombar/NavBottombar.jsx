import sound from '../../assets/QTV.mp3';

import "./NavBottombar.scss";
export function NavBottombar() {
  function play(){
    new Audio(sound).play()
  }
  return (
    <div className="ButtonWrapper">
      <div className="buttons">
        {/* <button onClick={play}></button> */}
        <a onClick={play} href="#">
          <div className="IconElipse">
            <img
              src="https://i.postimg.cc/523bkBTM/image.png"
              alt=""
              className="Plus"
            />
            <div className="SelectedElipse"></div>
            <div className="SelectedText">Add</div>
          </div>
        </a>

        <div className="IconElipse">
          <img
            src="https://i.postimg.cc/PxGdDjqr/image.png"
            alt=""
            className="Plus"
          />
          <div className="SelectedElipse"></div>
          <div className="SelectedText">Shop</div>
        </div>
        <div className="IconElipse">
          <img
            src="https://i.postimg.cc/NGzpkjc4/image.png"
            alt=""
            className="Plus"
          />
          <div className="SelectedElipse"></div>
          <div className="SelectedText">Album</div>
        </div>
        <div className="IconElipse">
          <img
            src="https://i.postimg.cc/ZnBPM6SL/image.png"
            alt=""
            className="Plus"
          />
          <div className="SelectedElipse"></div>
          <div className="SelectedText">Themes</div>
        </div>
        <div className="IconElipse">
          <img
            src="https://i.postimg.cc/523bkBTM/image.png"
            alt=""
            className="Plus"
          />
          <div className="SelectedElipse"></div>
          <div className="SelectedText">News</div>
        </div>
        <div className="IconElipse">
          <img
            src="https://i.postimg.cc/tJQd8Y4Q/image.png"
            alt=""
            className="Plus"
          />
          <div className="SelectedElipse"></div>
          <div className="SelectedText">Settings</div>
        </div>
      </div>
    </div>
  );
}
