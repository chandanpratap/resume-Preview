import Cookies from "js-cookie";
const Header1 = () => {
  const redirectScreen = (url) => {
    window.open(url, "_self");
  };

  const logout = () => {
    Cookies.remove("email");
    Cookies.remove("token");
    window.open("/");
  };

  return (
    <nav class="shadow navbar  navbar-expand-lg navbar-light bg-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MedPiper
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  onClick={() => redirectScreen("/resume-builder")}
                >
                  Resume Builder
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => redirectScreen("/profile-page")}
                >
                  Public Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header1;
