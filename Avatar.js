import blankAvatar from '../images/blank-profile.png'

// Define a functional component to display the avatar
const AvatarDisplay = ({ ticket }) => {
  return (
    // Create a container for the avatar
<div className="avatar-container">
    // Create a container for the image
<div className="img-container">
<img src={ticket.avatar ? ticket.avatar : blankAvatar} alt={'photo of ' + ticket.owner} />
</div>
</div>
  )
}

// Export the AvatarDisplay component
export default AvatarDisplay
