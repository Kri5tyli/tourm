function calculate() {
    // 獲取直售價和同業價
    const price = parseInt(document.getElementById('price').value) || 0;
    const net = parseInt(document.getElementById('net').value) || 0;

    // 計算總利潤並取整
    const profit = price - net;  

    // 更新總利潤顯示
    document.getElementById('profit').innerText = profit;

    // 取其他成本
    const other = parseInt(document.getElementById('other').value) || 0;
    // 取刷卡優惠價
    const cardDiscount = parseInt(document.getElementById('cardDiscount').value) || 0;
    // 刷卡優惠後團費
    const cardPrice = price - cardDiscount;
    // 顯示刷卡優惠後團費
    document.getElementById('cardPrice').innerText = cardPrice;
    // 取匯款優惠
    const remitDiscount = parseInt(document.getElementById('remitDiscount').value) || 0;
    // 匯款優惠後團費
    const remitPrice = price - remitDiscount;
    // 顯示匯款優惠後價格
    document.getElementById('remitPrice').innerText = remitPrice;
    // 刷卡手續費
    const cardFee = Math.round((price - cardDiscount)*0.02);
    // 顯示刷卡手續費
    document.getElementById('cardFee').innerText = cardFee;
    // 匯款優惠後利潤
    const remit = Math.floor((profit - remitDiscount - other)*0.6);
    // 顯示匯款優惠後利潤
    document.getElementById('remit').innerText = remit; 
    // 刷卡優惠後利潤
    const card = Math.floor((profit - cardDiscount - cardFee - other)*0.6);
    // 顯示刷卡優惠後利潤
    document.getElementById('card').innerText = card;
    // 取得刷卡報名人數
    const cardPeople = parseInt(document.getElementById('cardPeople').value) || 0;
    // 取得匯款報名人數
    const remitPeople = parseInt(document.getElementById('remitPeople').value) || 0;
    // 最後刷卡人數總利潤
    const cardTotal = card * cardPeople;
    // 顯示刷卡後人數總利潤
    document.getElementById('cardTotal').innerText = cardTotal;
    // 最後匯款人數總利潤
    const remitTotal = remit * remitPeople;
    // 顯示匯款後人數總利潤
    document.getElementById('remitTotal').innerText = remitTotal;
}
