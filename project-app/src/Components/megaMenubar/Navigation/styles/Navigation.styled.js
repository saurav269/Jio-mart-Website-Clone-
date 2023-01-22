import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 100%;
  background-color: rgb(235, 233, 233);

  //Part - 3
  .header_3Con {
    height: 36px;
    border-bottom: 1.5px solid var(--border);
    box-sizing: border-box;

    /* padding: 3px 6px; */
    .list {
      height: 100%;

      display: flex;
      align-items: center;
      /* max-width: 85%; */
      gap: 30px;
      margin: auto;
      justify-content: center;
      /* border: 1px solid red; */
      list-style: none;
      li {
        /* border: 1px solid red; */
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        a {
          font-size: 14px;
          color: #212121;

          text-decoration: none;
        }

        &:hover {
          .link {
            color: var(--hoverTextColor);
          }
        }
        span {
          /* border: 1px solid black; */
          height: 100%;
          padding: 0 2px;
          display: flex;
          align-items: center;
        }

        //submenu hidden
        //left
        .subMenu_left {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: 100%;

          height: auto;
          /* border: 1px solid black; */
          background-color: #ffffff;
          width: auto;
          display: flex;
          gap: 20px;
          padding: 15px;
          border-radius: 0 0 3px 3px;
          z-index: 10;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

          .vLine {
            border-left: 1px solid var(--border);
          }
          & > div {
            width: auto;

            ul {
              /* width: auto; */
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 160px;
              margin-bottom: 10px;

              li {
                line-height: 20px;
                a {
                  strong {
                    font-size: 13px;
                    color: #212121;
                  }

                  font-size: 13px;
                  color: #757575;
                }

                &:hover {
                  a {
                    strong {
                      color: var(--hoverTextColor);
                    }
                    color: var(--hoverTextColor);
                  }
                }
              }
            }
          }
        }

        //right
        .subMenu_right {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: 100%;
          right: 0;
          height: auto;
          /* border: 1px solid black; */
          background-color: #ffffff;
          width: auto;
          display: flex;
          gap: 20px;
          padding: 15px;
          border-radius: 0 0 3px 3px;
          z-index: 10;
          box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);

          .vLine {
            border-left: 1px solid var(--border);
          }
          & > div {
            width: auto;

            ul {
              /* width: auto; */
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 160px;
              margin-bottom: 10px;

              li {
                line-height: 20px;
                a {
                  strong {
                    font-size: 13px;
                    color: #212121;
                  }

                  font-size: 13px;
                  color: #757575;
                }

                &:hover {
                  a {
                    strong {
                      color: var(--hoverTextColor);
                    }
                    color: var(--hoverTextColor);
                  }
                }
              }
            }
          }
        }

        //on hover perent
        &:hover {
          .subMenu_left {
            visibility: visible;
            opacity: 1;
          }

          .subMenu_right {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }

  //Media queries
  @media (max-width: 1500px) {
    //Part - 1
    .header_1Con {
      //First div
      .firstPart {
        width: 60rem;

        //Logo
        .logoCon {
          width: 12%;

          img {
            width: 90px;
          }
        }
      }
    }

    .header_3Con {
      .list {
        /* height: 36px; */
        gap: 20px;
      }
    }
  }

  @media (max-width: 1380px) {
    .header_3Con {
      padding: 3px 0;
      height: auto;
      .list {
        /* justify-content: space-between; */
        /* gap: 5px; */
        flex-wrap: wrap;
        /* border-bottom: 1px solid red; */
      }
    }
  }

  @media (max-width: 1320px) {
    //Part - 1

    .header_1Con {
      //First div
      //Second part
      .secondPart {
        justify-content: center;
        .list {
          padding: 0;
          gap: 15px;
          li {
            /* border: 1px solid red; */
          }
        }
      }
    }
  }
`;

export const HiddenHead = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: white;
  z-index: 12;
  width: 250px;
  cursor: pointer;
  ${(props) => (props.val ? `display:block;` : `display:none;`)}

  ul {
    list-style: none;
  }
  li {
    height: 50px;
    font-size: 14px;
    margin-left: 5%;
    margin-top: 10px;
    font-weight: bold;
  }
  li:hover {
    color: #ff6f61;
  }
`;
export const Li = styled.li`
  .linkref1 {
    ${(props) => (props.val == "" ? `display:block` : `display:none`)}
  }

  .linkref2 {
    ${(props) => (props.val != "" ? `display:block` : `display:none`)}
  }
`;
