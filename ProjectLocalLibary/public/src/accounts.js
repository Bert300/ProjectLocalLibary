function findAccountById(accounts, id) {
 const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((account1, account2) => (account1.name.last) > (account2.name.last) ? 1 : -1);
}
function getTotalNumberOfBorrows(account, books) {
  const alphabetical = accounts.sort((nameA,nameB) =>
   nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1); 
  return alphabetical;
}
function getTotalNumberOfBorrows(account, books) {
  const userId = account.id;
  let accumulator = 0;
  const total = books.reduce((acc, book) => {
    const borrowRecord = book.borrows;
    const mapIds = borrowRecord.map((record) => record.id);
    if (mapIds.includes(userId)) acc++;
    return acc;
  }, accumulator);
  return total;
}

function getAccountFullNames(accounts) {
 return accounts.map(account => `${account.name.first} ${account.name.last}`);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
