import { query } from "./../lib/database"

//TODO: イベントポイント
export async function addEventPoint(userId: number, basePoint: number, randomPoint: number)
{
	try
	{		
		//NOTE: userModelのaddMoneyを参考にするとよい
		let addAmount = basePoint + Math.floor(Math.random() * randomPoint);
		let result = await query("UPDATE Event SET point = point + ? WHERE userId = ?",[addAmount, userId]);

		return [addAmount];
	}
	catch(ex)
	{
		console.log(ex);
	}

	return [];
}
