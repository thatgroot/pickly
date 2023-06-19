import "./brevoform.css"; // Assuming you moved the CSS to a separate file

const BrevoForm = () => {
  return (
    <div className="sib-form">
      <div id="sib-form-container" className="sib-form-container">
        <div
          id="error-message"
          className="sib-form-message-panel"
          style={{
            fontSize: "16px",
            textAlign: "left",
            fontFamily: "Helvetica, sans-serif",
            color: "#661d1d",
            backgroundColor: "#ffeded",
            borderRadius: "3px",
            borderColor: "#ff4949",
            maxWidth: "540px",
          }}
        >
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg
              viewBox="0 0 512 512"
              className="sib-icon sib-notification__icon"
            >
              <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path>
            </svg>
            <span className="sib-form-message-panel__inner-text">
              Your subscription could not be saved. Please try again.
            </span>
          </div>
        </div>
        <div
          id="success-message"
          className="sib-form-message-panel"
          style={{
            fontSize: "16px",
            textAlign: "left",
            fontFamily: "Helvetica, sans-serif",
            color: "#085229",
            backgroundColor: "#e7faf0",
            borderRadius: "3px",
            borderColor: "#13ce66",
            maxWidth: "540px",
          }}
        >
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <svg
              viewBox="0 0 512 512"
              className="sib-icon sib-notification__icon"
            >
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"></path>
            </svg>
            <span className="sib-form-message-panel__inner-text">
              Your subscription to Pickly has been successful.
            </span>
          </div>
        </div>
        <div
          id="sib-container"
          className="sib-container--large sib-container--vertical"
          style={{
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,1)",
            maxWidth: "540px",
            borderRadius: "3px",
            borderWidth: "1px",
            borderColor: "#C0CCD9",
            borderStyle: "solid",
            direction: "ltr",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BrevoForm;
