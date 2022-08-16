import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editeMode: false,
        status: this.props.status
    }

    activeEditeMode = () => {
        this.setState({editeMode: true})
    };
    deActiveEditeMode = () => {
        this.setState({editeMode: false});
        this.props.updateStatus(this.state.status)
    };
    onChangeUpdateStatus = (event) => {
        this.setState({
            status: event.currentTarget.value

        })
    };

    render() {
/*
        if (this.props.status === null) {
          return  <div>
                <p className={classes.ProfileDescription}>"Статус: не указан"</p>
            </div>

        } else {*/
            return (
                <div>
                    {!this.state.editeMode && <div>
                        <span onDoubleClick={this.activeEditeMode}>{this.props.status|| "нет статуса"}</span>
                    </div>}
                    {this.state.editeMode && <div>
                        <input onChange={this.onChangeUpdateStatus} autoFocus={true} onBlur={this.deActiveEditeMode}
                               value={this.state.status} type="text"/>
                    </div>}
                    {/* <div>
                    <img className={classes.ProfilePicture} alt="picture"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwvdY18l2WSnl9JsRSQPn7dV7eCKxyIX72mQ&usqp=CAU"/>
                    <h1 className={classes.UserName}>Просто Девушка</h1>
                </div>
                <div className={classes.ProfileOptions}>
                    <div className={classes.Comments}><a href="#40"><p><span
                        className={`${classes.IconComments}' '${classes.ScndFontColor}`}></span>23</p></a>
                    </div>
                    <div className={classes.Views}><a href="#41"><p><span
                        className={`${classes.IconViews}${classes.ScndFontColor}`}></span>841</p></a>
                    </div>
                    <div className={classes.Likes}><a href="#42"><p><span
                        className={`${classes.IconLikes}' '${classes.ScndFontColor}`}></span>49</p></a>
                    </div>

                </div>*/}

                </div>)
        }

}

export default ProfileStatus;