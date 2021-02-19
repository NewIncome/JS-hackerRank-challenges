function bonAppetit(bill, k, b) {
  let AnnasShare = (bill.reduce((a,c)=>a+c)-bill[k])/2;
  console.log(b == AnnasShare ? 'Bon Appetit' : b-AnnasShare);
}

