import React from "react";

const Alert = ({ message, onClose, onConfirm, showCancel }) => {
    if (!message) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(3px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "15px",
                    padding: "25px",
                    width: "380px",
                    textAlign: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    position: "relative",
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 12,
                        border: "none",
                        background: "transparent",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#666",
                    }}
                >
                    ×
                </button>
                <p style={{ fontSize: "16px", color: "#333", marginBottom: "25px" }}>
                    {message}
                </p>

                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    {showCancel && (
                        <button
                            onClick={onClose}
                            style={{
                                background: "#ccc",
                                border: "none",
                                borderRadius: "10px",
                                padding: "8px 20px",
                                cursor: "pointer",
                                fontWeight: "500",
                            }}
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        onClick={onConfirm || onClose}
                        style={{
                            backgroundColor: "#198754",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            padding: "8px 20px",
                            cursor: "pointer",
                            fontWeight: "500",
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
