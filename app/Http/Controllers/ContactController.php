<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Contact;
use Inertia\Inertia;

class ContactController extends Controller
{
    //
    public function index()
    {
        $contacts = Contact::latest()
            ->paginate(10)
            ->through(fn ($contact) => [
                'id' => $contact->id,
                'user_name' => $contact->user_name,
                'email' => $contact->email,
                'subject' => $contact->subject,
                'message' => str($contact->message)->limit(100),
                'created_at' => $contact->created_at->format('d M Y H:i'),
            ]);

        return Inertia::render('dashboardMessages', [
            'contacts' => $contacts,
        ]);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->back()->with('success', 'Message deleted successfully');
    }

    public function store(Request $request){

                // Validate input
                $validator = Validator::make($request->all(), [
                    'user_name' => 'required|string|max:255',
                    'email'     => 'required|email',
                    'subject'   => 'nullable|string|max:100',
                    'message'   => 'required|string'
                ]);
        
                if ($validator->fails()) {
                    if ($request->header('X-Inertia')) {
                        // Return a proper Inertia redirect with errors
                        return redirect()->back()
                            ->withErrors($validator)
                            ->withInput();
                    }
                    return response()->json(['errors' => $validator->errors()], 422);
                }



                        // Create user
        $message = Contact::create([
            'user_name' => $request->user_name,
            'email'     => $request->email,
            'subject'   => $request->subject,
            'message'   => $request->message,
        ]);

        if ($request->header('X-Inertia')) {
            // Return a redirect with a success flash message
            return redirect()->back()->with('message', 'message created successfully');
        }

        return response()->json(['message' => 'Message created successfully', 'message' => $message], 201);

    }
}
