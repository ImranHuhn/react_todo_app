import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CardItem } from "../CardItem";
import { DropdownButton } from "../DropdownButton";
import { TextInput } from "../TextInput";
import { ButtonWide } from "../ButtonWide";
import { MagnifyIcon, ArrowIcon } from "../IconComponent";

class Home extends React.Component {
  state = {
    value: "",
    search: "",
    showSort: false,
    showFilter: false,
    sortOptions: [
      "Default",
      "Ascending Date",
      "Descending Date",
      "Ascending Complexity",
      "Descending Complexity",
      "Ascending Priority",
      "Descending Priority",
    ],
    sort: "",
    filter: [],
  };

  handleAddClick = () => {
    this.props.handleAddClick();
  };

  handleSortClick = () => {
    this.setState({ showSort: !this.state.showSort, showFilter: false });
  };

  handleFilterClick = () => {
    this.setState({ showFilter: !this.state.showFilter, showSort: false });
  };

  searchChange = (e) => {
    this.setState({ value: e.target.value });
  };

  searchSubmit = (e) => {
    e.preventDefault();
    const submitSearch = this.state.value;
    this.setState({ search: submitSearch });
  };

  filterSelection = (selection) => {
    const filter = this.props.allTags.filter((el) => {
      return selection === el;
    });
    const newFilter = this.state.filter.concat(filter);
    this.setState({ filter: newFilter });
  };

  dropdownSelection = (item) => {
    console.log("option= ", item);
    this.setState({ sort: item });
    // this.setState({ sort: selection, showFilter: false, showSort: false });
    this.filterSelection(item);
  };

  getFilter = (e) => {
    console.log("filter= ", e.target.value);
    const filter = { text: e.target.value, isChecked: false };
    const newFilter = this.state.filter.concat(filter);
    this.setState({ filter: newFilter });
  };

  render() {
    // console.log("filter= ", this.state.filter);

    let searchTaskName;
    searchTaskName = this.props.taskList.filter((item) => {
      return item.taskName.includes(this.state.search);
    });

    // WORKING
    // const filter = this.props.allTags.filter((x) => {
    //   return this.state.filter.indexOf(x) > -1;
    // });

    // WORKING
    // searchTaskName = this.props.allTags.filter((x) => {
    //   return this.state.filter.includes(x);
    // });

    const foo = ["1", "2"];
    let searchTaskName1 = this.props.taskList.map((x) => {
      if(x.tags.includes(foo)){
        console.log(x)
      }
    });
    // let searchTaskName1 = this.props.taskList.filter((y) => {
    //   console.log("###", y.tags);
    //   return foo.includes(y.tags);
    // });

    // searchTaskName1.filter((x) => {
    //   console.log("---",x)
    // })

    console.log("test", searchTaskName1);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    searchTaskName.sort((a, b) => {
      const priorityA = a.priority;
      const priorityB = b.priority;
      const complexityA = a.complexity;
      const complexityB = b.complexity;
      const dateA = Date.parse(a.dueDate);
      const dateB = Date.parse(b.dueDate);
      switch (this.state.sort) {
        case "Ascending Date":
          return dateA - dateB;
        case "Descending Date":
          return dateB - dateA;
        case "Ascending Complexity":
          return complexityA - complexityB;
        case "Descending Complexity":
          return complexityB - complexityA;
        case "Ascending Priority":
          return priorityA - priorityB;
        case "Descending Priority":
          return priorityB - priorityA;
        default:
          return searchTaskName;
      }
    });

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "rgb(245, 245, 245)",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <div style={{ width: "500px", padding: "50px 0" }}>
          <form action="submit" onSubmit={this.searchSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <MagnifyIcon
                width="24"
                height="24"
                style={{ position: "absolute", left: "0", margin: "auto 18px" }}
              />
              <TextInput
                handleChange={this.searchChange}
                value={this.state.value}
                type="text"
                style={{ paddingLeft: "50px" }}
                placeholder="Search..."
              />
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "0",
                  backgroundColor: "rgba(13, 153, 255, 0.1)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  margin: "auto 10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <ArrowIcon
                  width="24"
                  height="24"
                  style={{ rotate: "180deg" }}
                />
              </button>
            </div>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <DropdownButton
              text="Sort"
              name="sort"
              showDropdown={this.state.showSort}
              handleClick={this.handleSortClick}
              sortOptions={this.state.sortOptions}
              dropdownSelection={this.dropdownSelection}
            />
            <DropdownButton
              text="Filter"
              showDropdown={this.state.showFilter}
              handleClick={this.handleFilterClick}
              allTags={this.props.allTags}
              dropdownSelection={this.dropdownSelection}
              getFilter={this.getFilter}
              filters={this.state.filter}
            />
          </div>
          {searchTaskName.map((item) => {
            return (
              <CardItem
                item={item}
                key={item.id}
                handleCheckClick={this.props.handleCheckClick}
                handleEditClick={this.props.handleEditClick}
                handleDetailClick={this.props.handleDetailClick}
              />
            );
          })}
          <div style={{ margin: "10px auto 20px", width: "192px" }}>
            <ButtonWide
              text="Add New Task"
              icon="plus"
              handleClick={this.handleAddClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
