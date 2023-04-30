import PropTypes from "prop-types";
import Logo from "./logo.png";

function Email({ email, userName }) {
  return (
    <fieldset id="email">
      <legend>Incoming Message</legend>
      <img className="email-bg" src={Logo} alt=""></img>
      {email && (
        <div
          className="email"
          dangerouslySetInnerHTML={{
            __html: email?.message.replace("{USER}", userName),
          }}
        ></div>
      )}
    </fieldset>
  );
}

Email.propTypes = {
  email: PropTypes.object,
  userName: PropTypes.string.isRequired,
};

export default Email;
