import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, getRepos } from "../store/index"
import CSS from "../App.css"

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  const repoData = useSelector((appState) => appState.repos)
  useEffect(() => {
    dispatch(getProfile())
    dispatch(getRepos())
  }, [])
  return (
    <div className="container1">
      {console.log(profileData)}
      {console.log(repoData)}
      <div className="row1">
        <div className="header">
          <p>Overview</p>
          <span>
            <li className="publicRepos">{profileData.public_repos}</li>
          </span>
          <p>Repositories</p>
          <p className="projects">Projects</p>
          <p>Packages</p>
        </div>
      </div>
      <div className="row2">
        <div className="col1">
          <img className="profilePic" src={profileData.avatar_url}></img>
          <h2>{profileData.name}</h2>
          <p>{profileData.login}</p>
          <br />
          <p className="loginBio">{profileData.bio}</p>
          <button className="editProfile">Edit Profile</button>
          <p className="belowEdit">&#xf126; {profileData.company}</p>
          <p className="belowEdit">&#xf126; {profileData.location}</p>
          <p className="belowEdit">
            {profileData.email == null
              ? `lanceamolo808@yahoo.com`
              : profileData.email}
          </p>
          <p className="belowEdit">&#xf126; {profileData.html_url}</p>
        </div>
        <div className="col2">
          <ul>
            {repoData.map((item) => (
              <li className="repoCards">
                <div className="leftSideRepo">
                  <h5 className="repoName">{item.name}</h5>
                  <p className="forkURL">Forked from {item.forks_url}</p>
                  <div className="thirdRowRepo">
                    <p>{item.language}</p>
                    <p>&#xf126; {item.forks_count}</p>
                    <p>Updated {item.updated_at}</p>
                  </div>
                </div>
                <div className="rightSideRepo">
                  <button className="">&#9734; Star</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

{
  /* <h2>Lance Amolo</h2>
        <h4>Hi, I'm Lance</h4>
        <button>Edit Profile</button>
        <h4>Las Vegas, NV</h4>
        <h4>lanceamolo808@yahoo.com</h4>
        <h4>https://github.com/lanceamolo</h4> */
}

{
  /* <li className="repoCards">1-HTML</li>
          <li className="repoCards">10-JS-clock</li>
          <li className="repoCards">11-async-get-todos-UPDATE</li>
          <li className="repoCards">13-JS-object-oriented-practice</li> */
}
