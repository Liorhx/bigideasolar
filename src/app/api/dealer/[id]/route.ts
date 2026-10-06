import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Dealer } from "@/models/Dealer";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await request.json();
    const { status, notes } = body;

    const updateFields: any = {};
    if (status) updateFields.status = status;
    if (notes !== undefined) updateFields.notes = notes;

    const updated = await Dealer.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true }
    ).lean();

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Dealer application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      dealer: {
        ...updated,
        id: (updated as any)._id.toString()
      }
    });
  } catch (error) {
    console.error("PATCH /api/dealer/[id] error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;

    const deleted = await Dealer.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Dealer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Dealer inquiry deleted from database successfully"
    });
  } catch (error) {
    console.error("DELETE /api/dealer/[id] error:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
