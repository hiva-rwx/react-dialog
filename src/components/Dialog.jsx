import React, { Fragment, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./dialog.scss";
const Dialog = ({ setClose, open, title, children }) => {
  const [posDown, setPosDown] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({
    x: window.innerWidth / 2 - 200 + Math.floor(Math.random() * 100),
    y: window.innerHeight / 2 - 200 + Math.floor(Math.random() * 100),
  });
  const [isDown, setIsDown] = useState(false);

  const ref = useRef(null);

  const targetEl = document.getElementById("root");

  const mouseMove = useCallback(
    (e) => {
      if (isDown) {
        let x = e.pageX - posDown.x;
        let y = e.pageY - posDown.y;
        setPos({ x: x, y: y });
      }
    },
    [isDown, posDown.x, posDown.y]
  );

  const mouseDown = useCallback((e) => {
    setPosDown({
      x: e.pageX - e.currentTarget.getBoundingClientRect().left,
      y: e.pageY - e.currentTarget.getBoundingClientRect().top,
    });
    setIsDown(true);
  }, []);

  const mouseUp = useCallback((e) => {
    setIsDown(false);
  }, []);

  const outPut = (
    <Fragment>
      {open && (
        <div
          onMouseMove={mouseMove}
          ref={ref}
          className="dialog"
          style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        >
          <div className="header" onMouseDown={mouseDown} onMouseUp={mouseUp}>
            <div className="title">{title}</div>
            <div className="close" onClick={() => setClose(false)}>
              <span>&#215;</span>
            </div>
          </div>
          <div className="body">{children}</div>
        </div>
      )}
    </Fragment>
  );

  return targetEl ? createPortal(outPut, targetEl) : outPut;
};

export default Dialog;
