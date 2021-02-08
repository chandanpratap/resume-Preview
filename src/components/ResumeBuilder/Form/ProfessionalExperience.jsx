import React from "react";
import "../../../App.css";
import axios from "axios";

class ProfessionalExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      details: "",
      id: 0,
      count: 0,
      filterData: [],
      data: [],
    };
  }

  getId = (id) => {
    this.setState({ id: id });
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.getData();
    this.props.getProfessionalExperienceInformation(this.state.data);
  }

  getData = async () => {
    await axios
      .get("http://localhost:3000/details")
      .then((response) => {
        this.setState({ data: response.data, filterData: response.data });
      })
      .catch((error) => {});
  };

  /**
   * add experiences
   * @param {} e
   */
  addProfessionalExperiences = async (e) => {
    e.preventDefault();
    let unique_id = this.props.unique_id;
    let newData = {
      name: this.state.name,
      details: this.state.details,
      class: "nav-link",
      id: this.state.name.concat("-tab"),
      data_bs_toggle: "tab",
      href: `#${this.state.name}`,
      role: "tab",
      aria_controls: this.state.name,
      aria_selected: "false",
      content_class: "tab-pane fade",
      unique_id: unique_id,
    };
    await this.setState((prevState) => ({
      data: [...prevState.data, newData],
      filterData: [...prevState.filterData, newData],
    }));
    await this.addExperiences(newData);
    await this.componentDidMount();
    this.setState({ name: "", details: "" });
  };

  /**
   * edit experiences
   */
  editProfessionalExperience = async () => {
    let data = [...this.state.data];
    let item = { ...data[this.state.id] };
    item.details = this.state.details;
    item.name = this.state.name;
    data[this.state.id] = item;
    await this.setState({ data });
    await this.editItems(item.id);
    await this.componentDidMount();
    await this.setState({ name: "", details: "" });
  };

  editItems = (id) => {
    axios
      .put("http://localhost:3000/details/".concat(id), {
        name: this.state.name,
        details: this.state.details,
        class: "nav-link",
        id: this.state.name.concat("-tab"),
        data_bs_toggle: "tab",
        href: `#${this.state.name}`,
        role: "tab",
        aria_controls: this.state.name,
        aria_selected: "false",
        content_class: "tab-pane fade",
        unique_id: this.props.unique_id,
      })
      .then((response) => {})
      .catch((error) => {});
  };

  /**
   * delete experiences
   */
  deleteItems = async () => {
    if (this.state.data.length > 1) {
      let data = [...this.state.data];
      let item = { ...data[this.state.id] };
      await this.deleteExperiences(item.id);
      const filterData = this.state.data.filter(
        (item, key) => key !== this.state.id
      );

      await this.setState({ data: filterData, filterData: filterData });
      await this.componentDidMount();
    }
  };

  addExperiences = (data) => {
    axios
      .post("http://localhost:3000/details", data)
      .then((response) => {})
      .catch((error) => {});
  };

  deleteExperiences = (id) => {
    axios
      .delete("http://localhost:3000/details/".concat(id))
      .then((response) => {})
      .catch((error) => {});
  };

  render() {
    return (
      <div className="professional-main">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            {this.state.data.map((val, k) => (
              <a
                class={val["class"]}
                id={val["id"]}
                data-bs-toggle={val["data_bs_toggle"]}
                href={val["href"]}
                role={val["role"]}
                aria-controls={val["aria_controls"]}
                aria-selected={val["aria_selected"]}
                onClick={() => this.getId(k)}
              >
                {val["name"]}
              </a>
            ))}
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          {this.state.data.map((val, k) => (
            <div
              class={val["content_class"]}
              id={val["aria_controls"]}
              role="tabpanel"
              aria-labelledby={val["id"]}
            >
              {val["details"]}
              <div className="add-button">
                <button
                  type="button"
                  class="btn btn-primary add-new"
                  data-bs-toggle="modal"
                  data-bs-target="#add-new"
                >
                  Add New
                </button>
                <button
                  type="button"
                  class="btn btn-primary add-new"
                  data-bs-toggle="modal"
                  data-bs-target="#edit"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-primary delete"
                  data-bs-toggle="modal"
                  data-bs-target="#delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* /* ********* ADD NEW ITEMS MODAL ************* */}

        <div
          class="modal fade"
          id="add-new"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Add New Items
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div>
                  <div class="col-md-8">
                    <label for="FirstName" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                  <br />
                  <div class="col-md-8">
                    <label for="Middle Name" class="form-label">
                      Details
                    </label>
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Details"
                      name="details"
                      value={this.state.details}
                      onChange={this.onChangeHandler}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={this.addProfessionalExperiences}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* /* ********* Edit ITEMS MODAL ************* */}

        <div
          class="modal fade"
          id="edit"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Edit
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div class="modal-body">
                  <div>
                    <div class="col-md-8">
                      <label for="FirstName" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        required
                      />
                    </div>
                    <br />
                    <div class="col-md-8">
                      <label for="Middle Name" class="form-label">
                        Details
                      </label>
                      <textarea
                        type="text"
                        class="form-control"
                        placeholder="Details"
                        name="details"
                        value={this.state.details}
                        onChange={this.onChangeHandler}
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={this.editProfessionalExperience}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* /* ********* DELETE ITEM MODAL ************* */}

        <div
          class="modal fade"
          id="delete"
          tabindex="-1"
          aria-labelledby="deleteLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="deleteLabel">
                  Delete Items
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Are you sure you want to delete ?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={this.deleteItems}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfessionalExperience;
