import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Follow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFollowText: ''
    }
  }
  updateFollowText = e => {
    this.setState({
      newFollowText: e.target.value
    })
  }
  render() {
    const filteredNotFollowing = this.props.notFollowing.filter(u => {
      return u.handle
        .toLowerCase()
        .startsWith(this.state.newFollowText.toLowerCase())
    })
    return (
      <div className="panel panel-default">
        <div className="close">
          <Link to="/">x</Link>
        </div>
        <div className="panel-body">
          <div className="row">
            <h3>Following</h3>

            <ul id="following">
              {this.props.following.length === 0 && (
                <li>You currently aren't following anyone.</li>
              )}
              {this.props.following.length > 0 && (
                <div
                  class="panel-body"
                  style={{ 'overflow-y': 'scroll', height: '100px' }}
                >
                  <div
                    class="mid-width wrapItems"
                    style={{
                      'padding-top': '10px',
                      'background-color': '#eeeeee',
                      height: '100px'
                    }}
                  >
                    {this.props.following.map(user => {
                      return (
                        <li className="following-handle" key={user.handle}>
                          <div className="col-xs-9">
                            <span className="handle">{user.handle}</span>
                          </div>
                          <div
                            className="col-xs-3"
                            style={{ 'padding-bottom': '10px' }}
                          >
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={() => this.props.unfollow(user.handle)}
                            >
                              Unfollow
                            </button>
                          </div>
                        </li>
                      )
                    })}
                  </div>
                </div>
              )}
            </ul>
          </div>

          <div className="row">
            <h3 id="myModalLabel">Follow someone</h3>
            <div className="col-xs-12">
              <div className="form-group input-icon">
                <i>@</i>
                <input
                  value={this.state.newFollowText}
                  onChange={this.updateFollowText}
                  type="text"
                  className="form-control"
                  id="followHandle"
                  placeholder="handle"
                />
              </div>
            </div>
            <ul id="not-following">
              {filteredNotFollowing.length === 0 && (
                <li>There are no users that you aren't already following.</li>
              )}
              {filteredNotFollowing.length > 0 && (
                <div
                  class="panel-body"
                  style={{ 'overflow-y': 'scroll', height: '200px' }}
                >
                  <div
                    class="mid-width wrapItems"
                    style={{
                      'padding-top': '10px',
                      'background-color': '#eeeeee',
                      height: '200px'
                    }}
                  >
                    {filteredNotFollowing.map(user => {
                      return (
                        <li className="following-handle" key={user.handle}>
                          <div className="col-xs-9">
                            <span className="handle">{user.handle}</span>
                          </div>
                          <div
                            className="col-xs-3"
                            style={{ 'padding-bottom': '10px' }}
                          >
                            <button
                              type="button"
                              className="btn btn-default"
                              onClick={() => this.props.follow(user.handle)}
                            >
                              Follow
                            </button>
                          </div>
                        </li>
                      )
                    })}
                  </div>
                </div>
              )}
            </ul>
            <div className="row">
              <div className="col-sm-1" />
              <div className="col-sm-4" />
              <div className="col-sm-6">
                <button
                  type="button"
                  id="close"
                  className="btn btn-primary pull-right"
                  onClick={() => this.props.history.push('/')}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Follow
