import React from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  Container,
  Wrapper,
  SearchBarWapper,
  ArrowButton,
  DropdownWrapper,
  ButtonWideWrapper,
} from "./Home.styles";
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
    filters: [],
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

    if (!this.state.filters.includes(selection)) {
      const newFilter = this.state.filters.concat(filter);
      this.setState({ filters: newFilter });
    }
  };

  dropdownSelection = (item) => {
    this.setState({ sort: item, showSort: false, showFilter: false });
    this.filterSelection(item);
  };

  render() {
    let searchTaskName;
    searchTaskName = this.props.taskList.filter((item) => {
      return item.taskName.includes(this.state.search);
    });

    if (this.state.filters.length > 0) {
      searchTaskName = searchTaskName.filter((el) =>
        el.tags.some((tags) => this.state.filters.includes(tags))
      );
    }

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
      <Container>
        <Wrapper>
          <form action="submit" onSubmit={this.searchSubmit}>
            <SearchBarWapper>
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
              <ArrowButton>
                <ArrowIcon
                  width="24"
                  height="24"
                  style={{ rotate: "180deg" }}
                />
              </ArrowButton>
            </SearchBarWapper>
          </form>
          <DropdownWrapper>
            <DropdownButton
              text="Sort"
              name="sort"
              showDropdown={this.state.showSort}
              handleClick={this.handleSortClick}
              sortOptions={this.state.sortOptions}
              dropdownSelection={this.dropdownSelection}
              sort={this.state.sort}
            />
            <DropdownButton
              text="Filter"
              showDropdown={this.state.showFilter}
              handleClick={this.handleFilterClick}
              allTags={this.props.allTags}
              dropdownSelection={this.dropdownSelection}
              filters={this.state.filters}
            />
          </DropdownWrapper>
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
          <ButtonWideWrapper>
            <ButtonWide
              text="Add New Task"
              icon="plus"
              handleClick={this.handleAddClick}
            />
          </ButtonWideWrapper>
        </Wrapper>
      </Container>
    );
  }
}

export default Home;
