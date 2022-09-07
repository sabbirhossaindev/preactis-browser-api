// local explore....

const local = () => {
    alert(` This read-only interface property provides access to the Document’s local storage object, the stored data is stored across browser sessions. Similar to sessionStorage, except that localStorage data gets cleared when the page session ends – that is when the page is closed. It is cleared when the last “private” tab of a browser is closed (localStorage data for a document loaded in a private browsing or incognito session).

    Local storage has 4 methods: 

    1. localStorage.setItem(key, value)
    2. localStorage.getItem(key)
    3. localStorage.removeItem(key)
    4. localStorage.clear()
    `)
};

// session storage...

const session = () => {
    alert(`Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.
    
    Session Storage has 4 methods:
    
    1. sessionStorage.setItem(key, value)
    2. sessionStorage.getItem(key)
    3. sessionStorage.removeItem(key)
    4. sessionStorage.clear()`)
};