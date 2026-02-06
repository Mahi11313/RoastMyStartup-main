/**
 * API client for RoastMyStartup backend
 */

export interface RoastRequest {
  startup_name: string;
  idea_description: string;
  target_users: string;
  budget: string;
  roast_level: "Soft" | "Medium" | "Nuclear";
}

export interface RoastResponse {
  brutal_roast: string;
  honest_feedback: string;
  competitor_reality_check: string;
  pitch_rewrite: string;
  survival_tips: string[];
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

/**
 * OAuth endpoints
 */
export const OAUTH_ENDPOINTS = {
  googleLogin: `${API_BASE_URL}/auth/google`,
};

/**
 * Generate a roast for a startup idea
 * @param request - The roast request data
 * @returns Promise resolving to the roast response
 * @throws Error if the API call fails
 */
export async function generateRoast(
  request: RoastRequest
): Promise<RoastResponse> {
  // Get auth token from localStorage if available
  const token = localStorage.getItem("auth_token");
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  
  // Add Authorization header if token exists
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  
  const response = await fetch(`${API_BASE_URL}/roast`, {
    method: "POST",
    headers,
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to generate roast: ${response.status} ${response.statusText}. ${errorText}`
    );
  }

  return response.json();
}