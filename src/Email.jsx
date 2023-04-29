import PropTypes from "prop-types";

function Email({ email }) {
  return (
    <fieldset id="email">
      <legend>Incoming Message</legend>
      {email && (
        <div
          className="email"
          dangerouslySetInnerHTML={{
            __html: email.message,
          }}
        ></div>
      )}
    </fieldset>
  );
}

Email.propTypes = {
  email: PropTypes.object,
};

export default Email;
