import "./styles.css";

export function WorkExperience() {
  return (
    <div className="WorkExperience">
      <div class="work-area">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="22"
          viewBox="0 0 11 22"
          fill="none"
          class="bk-arr"
        >
          <path
            d="M8.6501 22.0059C8.44339 22.0067 8.23915 21.9549 8.05238 21.8543C7.86561 21.7536 7.70107 21.6067 7.57084 21.4244L0.887764 11.9941C0.684253 11.7129 0.572998 11.3601 0.572998 10.9961C0.572998 10.632 0.684253 10.2793 0.887764 9.99805L7.80607 0.567785C8.04093 0.246815 8.37842 0.0449686 8.74429 0.0066507C9.11017 -0.0316672 9.47446 0.0966818 9.75703 0.363462C10.0396 0.630242 10.2173 1.0136 10.251 1.4292C10.2848 1.8448 10.1718 2.25861 9.9369 2.57958L3.75194 11.004L9.72935 19.4283C9.89855 19.659 10.006 19.94 10.0391 20.2379C10.0721 20.5358 10.0293 20.8382 9.9158 21.1094C9.80226 21.3806 9.62272 21.6091 9.39841 21.768C9.1741 21.9269 8.91442 22.0094 8.6501 22.0059Z"
            fill="black"
          />
        </svg>
        <div class="form-container">
          <div class="form-title">
            <text>Add Work Experience</text>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="567"
            height="13"
            viewBox="0 0 567 13"
            fill="none"
            class="line-work"
          >
            <path
              d="M3.4135 9.97619L563.768 3"
              stroke="#DBFF00"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
          <form action="#">
            <div class="form-group">
              <div class="form-label-1">
                <label for="title">Title:</label>
              </div>
              <input type="text" id="title" class="form-input" required />
            </div>
            <div class="form-group">
              <div class="form-label-2">
                <label for="years">Years:</label>
              </div>
              <input type="number" id="years" class="form-input" required />

              <div class="form-label-3">
                <label for="description" class="form-label">
                  Description:
                </label>

                <input id="description" class="form-input" required />
              </div>
              <div class="form-group">
                <button type="submit" class="form-button">
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
