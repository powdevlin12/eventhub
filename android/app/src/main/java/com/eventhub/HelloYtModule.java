package com.eventhub;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloYtModule extends ReactContextBaseJavaModule {

    public HelloYtModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "HelloYt";
    }

    @ReactMethod
    public void sayHello(String name, Callback callback) {
        try {
            String message = "Hello Hello" + name;
            callback.invoke(null, message);
        } catch (Exception e) {
            callback.invoke(e, null);
        }
    }
}
