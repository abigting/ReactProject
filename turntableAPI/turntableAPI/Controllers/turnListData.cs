using System;

public class turnListData
{
	public turnListData(double val, int type)
	{
		Val = val;
		Type = type;
	}
	public int Val { get; set; }
	public string Type { get; set; }
	public double GetVal()
	{
		return Val;
	}
	public string GetType()
	{
		return ClassType;
	}
}
