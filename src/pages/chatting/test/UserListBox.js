const UserListBox = (props) => {
  console.log('===============\n', props.userListTsx)
  return <div className='userListBoxContainer'>{props.userListTsx}</div>
}

export default UserListBox
