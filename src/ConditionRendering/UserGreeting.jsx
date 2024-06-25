import PropTypes from 'prop-types'
function UserGreeting(props){

    const mess1 = <h2>welcome {props.username}</h2>

    const mess2 = <h2>Sorry plz login </h2>
    return(
        props.IsloggedIn ? mess1 : mess2 
        
    );
}
UserGreeting.PropTypes={
    IsloggedIn : PropTypes.bool,
    username : PropTypes.string,
}
UserGreeting.defaultprops={
    IsloggedIn:false,
    username: "Guest",
}
export default UserGreeting;