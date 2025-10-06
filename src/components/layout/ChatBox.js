import React from "react";
import Icon1 from "../resources/icons/icon";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <div className="chatbox-close"></div>
      <div className="custom-tab-1">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#notes">
              Notes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#alerts">
              Alerts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="tab" href="#chat">
              Chat
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="chat" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <Icon1 />
                </a>
                <div>
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#">
                  <Icon1 />
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dz-scroll  "
                id="DZ_W_Contacts_Body"
              >
                <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li className="active dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Archie Parker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Alfie Mason</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">B</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Bashid Samim</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Breddie Ronan</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Ceorge Carson</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">D</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Darry Parker</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Denry Hunter</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">J</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Jack Ronan</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/1.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Jacob Tucker</span>
                        <p>Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/2.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>James Logan</span>
                        <p>Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/3.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon"></span>
                      </div>
                      <div className="user_info">
                        <span>Joshua Weston</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">O</li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/4.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Oliver Acker</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="dz-chat-user">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont">
                        <img
                          src="images/avatar/5.jpg"
                          className="rounded-circle user_img"
                          alt=""
                        />
                        <span className="online_icon offline"></span>
                      </div>
                      <div className="user_info">
                        <span>Oscar Weston</span>
                        <p>Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card chat dz-chat-history-box d-none">
              <div className="card-header chat-list-header text-center">
                <a href="#" className="dz-chat-history-back">
                  <Icon1 />
                </a>
                <div>
                  <h6 className="mb-1">Chat with Khelesh</h6>
                  <p className="mb-0 text-success">Online</p>
                </div>
                <div className="dropdown">
                  <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                    <Icon1 />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li className="dropdown-item">
                      <i className="fa fa-user-circle text-primary me-2"></i>{" "}
                      View profile
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-users text-primary me-2"></i> Add to
                      close friends
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-plus text-primary me-2"></i> Add to
                      group
                    </li>
                    <li className="dropdown-item">
                      <i className="fa fa-ban text-primary me-2"></i> Block
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="card-body msg_card_body dz-scroll"
                id="DZ_W_Contacts_Body3"
              >
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you samim?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Hi Khalid i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    You are welcome
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am looking for your next templates
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    Ok, thank you have a good day
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/2.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <div className="img_cont_msg">
                    <img
                      src="images/avatar/1.jpg"
                      className="rounded-circle user_img_msg"
                      alt=""
                    />
                  </div>
                  <div className="msg_cotainer">
                    Bye, see you
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div className="card-footer type_msg">
                <div className="input-group">
                  <textarea
                    className="form-control"
                    placeholder="Type your message..."
                  ></textarea>
                  <div className="input-group-append">
                    <button type="button" className="btn btn-primary">
                      <i className="fa fa-location-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="alerts" role="tabpanel">
            <div className="card mb-sm-3 mb-md-0 contacts_card">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <Icon1 />
                </a>
                <div>
                  <h6 className="mb-1">Notications</h6>
                  <p className="mb-0">Show All</p>
                </div>
                <a href="#">
                  <Icon1 />
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dz-scroll"
                id="DZ_W_Contacts_Body1"
              >
                <ul className="contacts">
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">KK</div>
                      <div className="user_info">
                        <span>David Nester Birthday</span>
                        <p className="text-primary">Today</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SOCIAL</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont success">
                        RU<i className="icon fa-birthday-cake"></i>
                      </div>
                      <div className="user_info">
                        <span>Perfection Simplified</span>
                        <p>Jame Smith commented on your status</p>
                      </div>
                    </div>
                  </li>
                  <li className="name-first-letter">SEVER STATUS</li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont primary">
                        AU<i className="icon fa fa-user-plus"></i>
                      </div>
                      <div className="user_info">
                        <span>AharlieKane</span>
                        <p>Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="img_cont info">
                        MO<i className="icon fa fa-user-plus"></i>
                      </div>
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
          <div className="tab-pane fade" id="notes">
            <div className="card mb-sm-3 mb-md-0 note_card">
              <div className="card-header chat-list-header text-center">
                <a href="#">
                  <Icon1 />
                </a>
                <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
                </div>
                <a href="#">
                  <Icon1 />
                </a>
              </div>
              <div
                className="card-body contacts_body p-0 dz-scroll"
                id="DZ_W_Contacts_Body2"
              >
                <ul className="contacts">
                  <li className="active">
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>New order placed..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Youtube, a video-sharing website..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>john just buy your product..</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex bd-highlight">
                      <div className="user_info">
                        <span>Athan Jacoby</span>
                        <p>10 Aug 2020</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#"
                          className="btn btn-primary btn-xs sharp me-1"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="#" className="btn btn-danger btn-xs sharp">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
