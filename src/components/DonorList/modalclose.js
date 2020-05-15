//  this code is not req in main project. can delete the file before <git merge> happen

// if the data from the inputs is in your component you can try something 
// like this : In closeModal you can set the initial state of the component


// const initialState = { startDate: null, endDate: null ,sources: null, minAmount: null, maxAmount:null, taxDeduc:null};
// const [state, setState] =useState([initialState]);

// const[filterState, setFilterState]= useState(initialState)

// function closeModal = () => {
//         this.setState({ 
//          modalIsOpen: false 
//         }, 
// return (() => {
//         this.props.resetDonorData();
//       }
// )
}
   
      // But if the stat of the inputs is coming from the Parent you need 
// a new method to reset the data of the parent component that cpuld be added as a callback in the same method.

// const initialState = {  }

// closeModal = () => {
//         this.setState({ 
//          ...initialState,
//          modalIsOpen: false 
//         });
//     }

// handleClose(e) {
//       e.preventDefault();
//       this.setState({
//             startDate: '', 
//             endDate: '' ,
//             sources: '', 
//             minAmount: '', 
//             maxAmount:'', 
//             taxDeduc: ''
           
//       });
//     }

//     handleClearForm(e) {
//       e.preventDefault();
//       this.setState({
//         ownerName: '',
//         selectedPets: [],
//         ownerAgeRangeSelection: '',
//         siblingSelection: [],
//         currentPetCount: 0,
//         description: ''
//       });
//     }
