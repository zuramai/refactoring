package girish.modularization.broken.before;

public class Device {
	private DeviceData data;
	
	public String getDevicePath() {
		return data.devicePath;
	}
	
	public String lookupDevice(String device) {
		//...
		return "";
	}
	
	public boolean isEnabled() {
		return false;
	}
	
	//...
}
