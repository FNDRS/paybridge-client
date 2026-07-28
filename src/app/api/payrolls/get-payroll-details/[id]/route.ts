import { getManagementApiToken } from "@/utils/auth-0-utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // TODO: change management to access token
  const token = await getManagementApiToken();

  try {
    const response = await axios.get<PayrollDetailResponse>(
      `${process.env.API_URL}/payrolls/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status !== 200) {
      return NextResponse.json(
        { message: "An error occurred while fetching payroll" },
        { status: 500 }
      );
    }

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error fetching payroll:", error.message);
    return NextResponse.json(
      { message: "Failed to fetch payroll", error: error.message },
      { status: 500 }
    );
  }
}
