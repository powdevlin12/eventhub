package com.eventhub;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class CustomModule extends ReactContextBaseJavaModule {
    public CustomModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CustomModule"; // Tên của module (sẽ được sử dụng trong JavaScript)
    }

    @ReactMethod
    public void greet(String name, Callback callback) {
        String message = "Hello, " + name + "!!!!!!";
        callback.invoke(message); // Gửi kết quả về JavaScript
    }

    @ReactMethod
    public void getModuleName(Callback callback) {
        String message = this.getName();
        callback.invoke(message); // Gửi kết quả về JavaScript
    }
}