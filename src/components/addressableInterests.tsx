// import {
//   Checkbox,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   TextField,
// } from "@mui/material";
// import "./addressableInterests.css";
// import { useState } from "react";
// import leftArrow from "../imgs/leftArrow.svg";
// import rightArrow from "../imgs/rightArrow.svg";
// import searchIcon from "../imgs/search.svg";

// function not(a: readonly number[], b: readonly number[]) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a: readonly number[], b: readonly number[]) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

// function union(a: readonly number[], b: readonly number[]) {
//   return [...a, ...not(b, a)];
// }

// function AddressableInterests() {
//   const [checked, setChecked] = useState<readonly number[]>([]);
//   const [left, setLeft] = useState<readonly number[]>([
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//   ]);
//   const [right, setRight] = useState<readonly number[]>([]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const numberOfChecked = (items: readonly number[]) =>
//     intersection(checked, items).length;

//   const handleToggleAll = (items: readonly number[]) => () => {
//     if (numberOfChecked(items) === items.length) {
//       setChecked(not(checked, items));
//     } else {
//       setChecked(union(checked, items));
//     }
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const handleSearch = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     console.log(e.target.value);
//   };

//   const customList = (items: readonly number[], idd: string) => (
//     <div className="box-2">
//       <div className="cardHeader">
//         {idd === "left" ? (
//           <TextField
//             id=""
//             label={<img src={searchIcon} alt="" />}
//             placeholder="search"
//             size="small"
//             className="textHeader"
//             onChange={(e) => handleSearch(e)}
//           />
//         ) : null}
//         <div className="subCardHeader">
//           <div className="headerCheckbox">
//             <Checkbox
//               sx={{ margin: 0, padding: 0 }}
//               onClick={handleToggleAll(items)}
//               checked={
//                 numberOfChecked(items) === items.length && items.length !== 0
//               }
//               //   indeterminate={
//               //     numberOfChecked(items) !== items.length &&
//               //     numberOfChecked(items) !== 0
//               //   }
//               disabled={items.length === 0}
//               inputProps={{
//                 "aria-label": "all items selected",
//               }}
//             />
//             <p>Select All</p>
//           </div>
//           <p>{`Available(${items.length})`}</p>
//         </div>
//       </div>
//       <div className="list">
//         {idd === "left" ? (
//           <List
//             sx={{
//               width: 510,
//               height: 270,
//               overflowY: "auto",
//               overflowX: "hidden",
//               margin: 0,
//               padding: 0,
//               borderRadius: 0,
//             }}
//             dense
//             component="div"
//             role="list"
//             className="custom-scrollbar"
//           >
//             {items.map((value: number) => {
//               const labelId = `transfer-list-all-item-${value}-label`;

//               return (
//                 <ListItem
//                   sx={{ margin: 0, padding: 0, height: 30 }}
//                   key={value}
//                   onClick={handleToggle(value)}
//                   className="listItem"
//                 >
//                   <ListItemIcon sx={{ margin: 0, padding: 0 }}>
//                     <Checkbox
//                       sx={{ margin: 0 }}
//                       checked={checked.indexOf(value) !== -1}
//                       tabIndex={-1}
//                       disableRipple
//                       inputProps={{
//                         "aria-labelledby": labelId,
//                       }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText
//                     sx={{
//                       margin: -2,
//                     }}
//                     id={labelId}
//                     primary={
//                       <span className="listItemText">
//                         List item {value + 1}
//                       </span> // Apply custom styles here
//                     }
//                   />
//                 </ListItem>
//               );
//             })}
//           </List>
//         ) : (
//           <List
//             sx={{
//               width: 510,
//               height: 300,
//               overflowY: "auto",
//               overflowX: "hidden",
//               margin: 0,
//               padding: 0,
//               borderRadius: 0,
//             }}
//             dense
//             component="div"
//             role="list"
//             className="custom-scrollbar"
//           >
//             {items.map((value: number) => {
//               const labelId = `transfer-list-all-item-${value}-label`;

//               return (
//                 <ListItem
//                   sx={{ margin: 0, padding: 0, height: 30 }}
//                   key={value}
//                   onClick={handleToggle(value)}
//                   className="listItem"
//                 >
//                   <ListItemIcon sx={{ margin: 0, padding: 0 }}>
//                     <Checkbox
//                       checked={checked.indexOf(value) !== -1}
//                       tabIndex={-1}
//                       disableRipple
//                       inputProps={{
//                         "aria-labelledby": labelId,
//                       }}
//                     />
//                   </ListItemIcon>
//                   <ListItemText
//                     sx={{
//                       margin: -2,
//                       padding: -1,
//                     }}
//                     id={labelId}
//                     primary={
//                       <span className="listItemText">
//                         List item {value + 1}
//                       </span> // Apply custom styles here
//                     }
//                   />
//                 </ListItem>
//               );
//             })}
//           </List>
//         )}
//       </div>
//     </div>
//   );
//   return (
//     <div>
//       <div className="ai">
//         <h4>Addressable Interests</h4>
//         <div className="aiBox">
//           <Grid container justifyContent="center" alignItems="center" gap={1}>
//             <Grid item className="leftGrid">
//               {customList(left, "left")}
//             </Grid>
//             <Grid item>
//               <Grid
//                 container
//                 direction="column"
//                 alignItems="center"
//                 className="leftRightButton"
//               >
//                 <img src={rightArrow} alt="" onClick={handleCheckedRight} />
//                 <img src={leftArrow} alt="" onClick={handleCheckedLeft} />
//               </Grid>
//             </Grid>
//             <Grid item className="rightGrid">
//               {customList(right, "right")}
//             </Grid>
//           </Grid>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddressableInterests;

import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import "./addressableInterests.css";
import { useState } from "react";
import leftArrow from "../imgs/leftArrow.svg";
import rightArrow from "../imgs/rightArrow.svg";
import searchIcon from "../imgs/search.svg";
import infoIcon from "../imgs/infoIcon.svg";
function not(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: readonly string[], b: readonly string[]) {
  return [...a, ...not(b, a)];
}

function AddressableInterests() {
  const [checked, setChecked] = useState<readonly string[]>([]);
  const [left, setLeft] = useState<readonly string[]>([
    "Age|18-34|ADLT1830",
    "Age|18-34|ADLT1831",
    "Age|18-34|ADLT1832",
    "Age|18-34|ADLT1833",
    "Age|18-34|ADLT1834",
    "Age|18-34|ADLT1835",
    "Age|18-34|ADLT1836",
    "Age|18-34|ADLT1837",
    "Age|18-34|ADLT1838",
    "Age|18-34|ADLT1839",
    "Age|18-34|ADLT18310",
    "Age|18-34|ADLT18311",
    "Age|18-34|ADLT18312",
    "Age|18-34|ADLT18313",
    "Age|18-34|ADLT18314",
    "Age|18-34|ADLT18315",
    // Add more labels as needed
  ]);
  const [right, setRight] = useState<readonly string[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (label: string) => () => {
    const currentIndex = checked.indexOf(label);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(label);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: readonly string[]) =>
    intersection(checked, items).length;

  const handleToggleAll = (items: readonly string[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
  };

  const customList = (items: readonly string[], idd: string) => (
    <div className="box-2">
      <div className="cardHeader">
        {idd === "left" ? (
          <TextField
            id=""
            label={
              <span className="searchIcon">
                <img src={searchIcon} alt="" /> <div>Search...</div>
              </span>
            }
            // placeholder="search"
            size="small"
            className="textHeader"
            onChange={(e) => handleSearch(e)}
          />
        ) : null}
        <div className="subCardHeader">
          <div className="headerCheckbox">
            <Checkbox
              sx={{ margin: 0, padding: 0 }}
              onClick={handleToggleAll(items)}
              checked={
                numberOfChecked(items) === items.length && items.length !== 0
              }
              disabled={items.length === 0}
              inputProps={{
                "aria-label": "all items selected",
              }}
            />
            <p>Select All</p>
          </div>
          <p>{`Available(${items.length})`}</p>
        </div>
      </div>
      <div className="list">
        {idd === "left" ? (
          <List
            sx={{
              width: "98%",
              height: 270,
              overflowY: "auto",
              overflowX: "hidden",
              margin: 0,
              padding: 0,
              borderRadius: 0,
            }}
            dense
            component="div"
            role="list"
            className="custom-scrollbar"
          >
            {items.map((label: string) => {
              const labelId = `transfer-list-all-item-${label.replace(
                /\s+/g,
                ""
              )}-label`;

              return (
                <ListItem
                  sx={{ margin: 0, padding: 0, height: 30 }}
                  key={label}
                  onClick={handleToggle(label)}
                  className="listItem"
                >
                  <ListItemIcon sx={{ margin: 0, padding: 0 }}>
                    <Checkbox
                      sx={{ margin: 0 }}
                      checked={checked.indexOf(label) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      margin: -2,
                    }}
                    id={labelId}
                    primary={
                      <span className="listItemText">{label}</span> // Apply custom styles here
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        ) : (
          <List
            sx={{
              width: "98%",
              height: 300,
              overflowY: "auto",
              overflowX: "hidden",
              margin: 0,
              padding: 0,
              borderRadius: 0,
            }}
            dense
            component="div"
            role="list"
            className="custom-scrollbar"
          >
            {items.map((label: string) => {
              const labelId = `transfer-list-all-item-${label.replace(
                /\s+/g,
                ""
              )}-label`;

              return (
                <ListItem
                  sx={{ margin: 0, padding: 0, height: 30 }}
                  key={label}
                  onClick={handleToggle(label)}
                  className="listItem"
                >
                  <ListItemIcon sx={{ margin: 0, padding: 0 }}>
                    <Checkbox
                      checked={checked.indexOf(label) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      margin: -2,
                      padding: -1,
                    }}
                    id={labelId}
                    primary={
                      <span className="listItemText">{label}</span> // Apply custom styles here
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    </div>
  );
  return (
    <div>
      <div className="ai">
        <h4>
          Addressable Interests{" "}
          <span>
            <img src={infoIcon} alt="info" title="dummy text dummyt text" />
          </span>
        </h4>
        <div className="aiBox">
          <div className="gridContainer">
            <div className="leftGrid">{customList(left, "left")}</div>
            <div className="midGrid">
              <div className="leftRightButton">
                <img src={rightArrow} alt="" onClick={handleCheckedRight} />
                <img src={leftArrow} alt="" onClick={handleCheckedLeft} />
              </div>
            </div>
            <div className="rightGrid">{customList(right, "right")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressableInterests;
